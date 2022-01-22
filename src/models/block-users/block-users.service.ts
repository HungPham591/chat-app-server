import { AdminsService } from './../admins/admins.service';
import { BlockUsersDTO, BlockUsersRO } from './block_users.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlockUserEntity } from './block_users.entity';

@Injectable()
export class BlockUsersService {
    constructor(
        @InjectRepository(BlockUserEntity)
        private readonly blockUserRepository: Repository<BlockUserEntity>,
        private readonly adminsService: AdminsService
    ) { }
    private async isAdmin(adminId: string) {
        this.adminsService.getOne(adminId);
    }
    private toCondition(user_id?: string, report_type_id?: string) {
        return {
            ...user_id && { user: { id: user_id } },
            ...report_type_id && { report_type: { id: report_type_id } }
        };
    }
    async get(page: number = 1, user?: string, report_type?: string): Promise<BlockUsersRO[]> {
        const numberPerPage = 10;
        const condition = this.toCondition(user, report_type);
        const blockUsers = await this.blockUserRepository.find({
            where: condition,
            take: numberPerPage,
            skip: numberPerPage * (page - 1)
        });
        return blockUsers;
    }
    async getOne(id: string): Promise<BlockUsersRO> {
        const blockUser = await this.blockUserRepository.findOne({
            where: { id }
        });
        if (!blockUser) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return blockUser;
    }
    async create(data: BlockUsersDTO): Promise<BlockUsersRO> {
        this.isAdmin('adminId');
        const blockUser = await this.blockUserRepository.create(data);
        await this.blockUserRepository.save(blockUser);
        return blockUser;
    }
    async update(id: string, data: Partial<BlockUsersDTO>): Promise<BlockUsersRO> {
        this.isAdmin('adminId');
        let blockUser = await this.blockUserRepository.findOne({ where: { id } });
        if (!blockUser) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.blockUserRepository.update({ id }, data);
        blockUser = await this.blockUserRepository.findOne({ where: { id } });
        return blockUser;
    }
    async delete(id: string): Promise<BlockUsersRO> {
        this.isAdmin('adminId');
        const blockUser = await this.blockUserRepository.findOne({ id });
        if (!blockUser) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.blockUserRepository.remove(blockUser);
        return blockUser;
    }
}

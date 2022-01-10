import { BlockUsersDTO, BlockUsersRO } from './block_users.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlockUserEntity } from './block_users.entity';

@Injectable()
export class BlockUsersService {
    constructor(
        @InjectRepository(BlockUserEntity)
        private blockUserRepository: Repository<BlockUserEntity>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    async get(page: number = 1): Promise<BlockUsersRO[]> {
        const numberPerPage = 10;
        const blockUsers = await this.blockUserRepository.find({
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
        this.ensureOwnership('adminId');
        const blockUser = await this.blockUserRepository.create(data);
        await this.blockUserRepository.save(blockUser);
        return blockUser;
    }
    async update(id: string, data: Partial<BlockUsersDTO>): Promise<BlockUsersRO> {
        this.ensureOwnership('adminId');
        let blockUser = await this.blockUserRepository.findOne({ where: { id } });
        if (!blockUser) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.blockUserRepository.update({ id }, data);
        blockUser = await this.blockUserRepository.findOne({ where: { id } });
        return blockUser;
    }
    async delete(id: string): Promise<BlockUsersRO> {
        this.ensureOwnership('adminId');
        const blockUser = await this.blockUserRepository.findOne({ id });
        if (!blockUser) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.blockUserRepository.remove(blockUser);
        return blockUser;
    }
}

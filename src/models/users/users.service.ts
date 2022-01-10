import { UsersRO, UsersDTO } from './users.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    async get(page: number = 1): Promise<UsersRO[]> {
        const numberPerPage = 10;
        const users = await this.userRepository.find({
            take: numberPerPage,
            skip: numberPerPage * (page - 1)
        });
        return users;
    }
    async getOne(id: string): Promise<UsersRO> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return user;
    }
    async create(data: UsersDTO): Promise<UsersRO> {
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }
    async update(id: string, data: Partial<UsersDTO>): Promise<UsersRO> {
        let user = await this.userRepository.findOne({ where: { id } });
        if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.userRepository.update(id, data);
        user = await this.userRepository.findOne({ where: { id } });
        return user;
    }
    async delete(id: string): Promise<UsersRO> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.userRepository.remove(user);
        return user;
    }
}

import { UsersRO, UsersDTO } from './users.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    private async isAdmin(adminId: string) {

    }
    private toCondition(gender_id?: string, interested_in_gender_id?: string, category_id?: string, language_id?: string, service_id?: string) {
        return {
            ...gender_id && { gender: { id: gender_id } },
            ...interested_in_gender_id && { interested_in_gender_id: { id: interested_in_gender_id } },
            ...category_id && { category: { id: category_id } },
            ...language_id && { language: { id: language_id } },
            ...service_id && { service: { id: service_id } }
        };
    }
    async get(page: number = 1, gender?: string, interested_in_gender?: string, category?: string, language?: string, service?: string): Promise<UsersRO[]> {
        const numberPerPage = 10;
        const condition = this.toCondition(gender, interested_in_gender, category, language, service);
        const users = await this.userRepository.find({
            where: condition,
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
        await this.userRepository.softRemove(user);
        return user;
    }
    async restore(id: string): Promise<UsersRO> {
        let user = await this.userRepository.findOne({ where: { id }, withDeleted: true });
        if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.userRepository.restore(user);
        user = await this.userRepository.findOne({ where: { id } });
        return user;
    }
}

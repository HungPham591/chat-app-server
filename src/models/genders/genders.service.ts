import { AdminsService } from './../admins/admins.service';
import { GendersRO, GendersDTO } from './genders.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GendersEntity } from './genders.entity';

@Injectable()
export class GendersService {
    constructor(
        @InjectRepository(GendersEntity)
        private readonly genderRepository: Repository<GendersEntity>,
        private readonly adminsService: AdminsService
    ) { }
    private async isAdmin(adminId: string) {
        this.adminsService.getOne(adminId);
    }
    async get(): Promise<GendersRO[]> {
        const gender = await this.genderRepository.find();
        return gender;
    }
    async getOne(id: string): Promise<GendersRO> {
        const gender = await this.genderRepository.findOne({ where: { id } });
        if (!gender) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return gender;

    }
    async create(data: GendersDTO): Promise<GendersRO> {
        this.isAdmin('adminId');
        const gender = await this.genderRepository.create(data);
        await this.genderRepository.save(gender);
        return gender;
    }
    async update(id: string, data: Partial<GendersDTO>): Promise<GendersRO> {
        this.isAdmin('adminId');
        let gender = await this.genderRepository.findOne({ where: { id } });
        if (!gender) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.genderRepository.update(id, data);
        gender = await this.genderRepository.findOne({ where: { id } });
        return gender;
    }
    async delete(id: string): Promise<GendersRO> {
        this.isAdmin('adminId');
        const gender = await this.genderRepository.findOne({ where: id });
        if (!gender) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.genderRepository.softRemove(gender);
        return gender;
    }
    async restore(id: string): Promise<GendersRO> {
        this.isAdmin('adminId');
        let gender = await this.genderRepository.findOne({ where: { id }, withDeleted: true });
        if (!gender) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.genderRepository.restore(gender);
        gender = await this.genderRepository.findOne({ where: id });
        return gender;
    }
}

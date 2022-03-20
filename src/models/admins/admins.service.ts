import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminsRO } from './../../../dist/models/admins/admins.dto.d';
import { AdminsDTO } from './admins.dto';
import { AdminEntity } from './admins.entity';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(AdminEntity)
        private readonly adminRepository: Repository<AdminEntity>
    ) { }

    private async isAdmin(adminId: string) {

    }
    async get(page: number = 1, sizePerPage: number = 10): Promise<AdminsRO[]> {
        const admins = await this.adminRepository.find();
        return admins;
    }
    async getOne(id: string): Promise<AdminsRO> {
        const admin = await this.adminRepository.findOne(
            {
                where: { id }
            }
        );
        if (!admin) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return admin;
    }
    async create(data: AdminsDTO): Promise<AdminsRO> {
        this.isAdmin('adminId');
        const admin = await this.adminRepository.create(data);
        await this.adminRepository.save(admin);
        return admin;
    }
    async update(id: string, data: Partial<AdminsDTO>): Promise<AdminsRO> {
        this.isAdmin('adminId');
        let admin = await this.adminRepository.findOne({ where: { id } });
        if (!admin) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.adminRepository.update(id, data);
        admin = await this.adminRepository.findOne({ where: { id } });
        return admin;
    }
    async delete(id: string): Promise<AdminsRO> {
        this.isAdmin('adminId');
        const admin = await this.adminRepository.findOne({ where: { id } });
        if (!admin) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.adminRepository.softRemove(admin);
        return admin;
    }
    async restore(id: string): Promise<AdminsRO> {
        this.isAdmin('adminId');
        let admin = await this.adminRepository.findOne({ where: { id }, withDeleted: true });
        if (!admin) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.adminRepository.restore(admin);
        admin = await this.adminRepository.findOne({ where: { id } });
        return admin;
    }
}

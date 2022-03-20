import { AdminsService } from './../admins/admins.service';
import { ServicesRO, ServicesDTO } from './services.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicesEntity } from './services.entity';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(ServicesEntity)
        private readonly servicesRepository: Repository<ServicesEntity>,
        private readonly adminsService: AdminsService
    ) { }
    private async isAdmin(adminId: string) {
        this.adminsService.getOne(adminId);
    }
    async get(page: number = 1, sizePerPage: number = 10): Promise<ServicesRO[]> {
        const services = await this.servicesRepository.find();
        return services;
    }
    async getOne(id: string): Promise<ServicesRO> {
        const service = await this.servicesRepository.findOne({ where: { id } });
        if (service) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return service;
    }
    async create(data: ServicesDTO): Promise<ServicesRO> {
        this.isAdmin('adminId');
        const service = await this.servicesRepository.create(data);
        await this.servicesRepository.save(service);
        return service;
    }
    async update(id: string, data: Partial<ServicesDTO>): Promise<ServicesRO> {
        this.isAdmin('adminId');
        let service = await this.servicesRepository.findOne({ where: { id } });
        if (!service) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.servicesRepository.update(id, service);
        service = await this.servicesRepository.findOne({ where: { id } });
        return service;
    }
    async delete(id: string): Promise<ServicesRO> {
        this.isAdmin('adminId');
        const service = await this.servicesRepository.findOne({ where: { id } });
        if (!service) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.servicesRepository.softRemove(service);
        return service;
    }
    async restore(id: string): Promise<ServicesRO> {
        this.isAdmin('adminId');
        let service = await this.servicesRepository.findOne({ where: { id }, withDeleted: true });
        if (!service) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.servicesRepository.restore(service);
        service = await this.servicesRepository.findOne({ where: { id } });
        return service;
    }
}

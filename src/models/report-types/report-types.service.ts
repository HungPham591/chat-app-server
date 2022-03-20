import { AdminsService } from './../admins/admins.service';
import { ReportTypesRO, ReportTypesDTO } from './report_types.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportTypesEntity } from './report_types.entity';

@Injectable()
export class ReportTypesService {
    constructor(
        @InjectRepository(ReportTypesEntity)
        private readonly reportTypesRepository: Repository<ReportTypesEntity>,
        private readonly adminsService: AdminsService
    ) { }
    private async isAdmin(adminId: string) {
        this.adminsService.getOne(adminId);
    }
    async get(page: number = 1, sizePerPage: number = 10): Promise<ReportTypesRO[]> {
        const reportTypes = await this.reportTypesRepository.find();
        return reportTypes;
    }
    async getOne(id: string): Promise<ReportTypesRO> {
        const reportType = await this.reportTypesRepository.findOne({ where: { id } });
        if (!reportType) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return reportType;
    }
    async create(data: ReportTypesDTO): Promise<ReportTypesRO> {
        this.isAdmin('adminId');
        const reportType = await this.reportTypesRepository.create(data);
        await this.reportTypesRepository.save(reportType);
        return reportType;
    }
    async update(id: string, data: Partial<ReportTypesDTO>): Promise<ReportTypesRO> {
        this.isAdmin('adminId');
        let reportType = await this.reportTypesRepository.findOne({ where: { id } });
        if (!reportType) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.reportTypesRepository.update(id, data);
        reportType = await this.reportTypesRepository.findOne({ where: { id } });
        return reportType;
    }
    async delete(id: string): Promise<ReportTypesRO> {
        this.isAdmin('adminId');
        const reportType = await this.reportTypesRepository.findOne({ where: { id } });
        if (!reportType) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.reportTypesRepository.softRemove(reportType);
        return reportType;
    }
    async restore(id: string): Promise<ReportTypesRO> {
        this.isAdmin('adminId');
        let reportType = await this.reportTypesRepository.findOne({ where: { id }, withDeleted: true });
        if (!reportType) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.reportTypesRepository.restore(reportType);
        reportType = await this.reportTypesRepository.findOne({ where: { id } });
        return reportType;
    }
}

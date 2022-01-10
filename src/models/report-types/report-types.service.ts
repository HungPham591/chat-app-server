import { ReportTypesRO, ReportTypesDTO } from './report_types.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportTypesEntity } from './report_types.entity';

@Injectable()
export class ReportTypesService {
    constructor(
        @InjectRepository(ReportTypesEntity)
        private reportTypesRepository: Repository<ReportTypesEntity>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    async get(): Promise<ReportTypesRO[]> {
        const reportTypes = await this.reportTypesRepository.find();
        return reportTypes;
    }
    async getOne(id: string): Promise<ReportTypesRO> {
        const reportType = await this.reportTypesRepository.findOne({ where: { id } });
        if (!reportType) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return reportType;
    }
    async create(data: ReportTypesDTO): Promise<ReportTypesRO> {
        this.ensureOwnership('adminId');
        const reportType = await this.reportTypesRepository.create(data);
        await this.reportTypesRepository.save(reportType);
        return reportType;
    }
    async update(id: string, data: Partial<ReportTypesDTO>): Promise<ReportTypesRO> {
        this.ensureOwnership('adminId');
        let reportType = await this.reportTypesRepository.findOne({ where: { id } });
        if (!reportType) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.reportTypesRepository.update(id, data);
        reportType = await this.reportTypesRepository.findOne({ where: { id } });
        return reportType;
    }
    async delete(id: string): Promise<ReportTypesRO> {
        this.ensureOwnership('adminId');
        const reportType = await this.reportTypesRepository.findOne({ where: { id } });
        if (!reportType) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.reportTypesRepository.remove(reportType);
        return reportType;
    }
}

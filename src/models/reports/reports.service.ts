import { ReportsRO, ReportsDTO } from './reports.dto';
import { ReportTypesRO } from './../report-types/report_types.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportsEntity } from './reports.entity';

@Injectable()
export class ReportsService {
    constructor(
        @InjectRepository(ReportsEntity)
        private reportsRepository: Repository<ReportsEntity>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    async get(page: number = 1): Promise<ReportTypesRO[]> {
        const numberPerPage = 10;
        const reports = await this.reportsRepository.find({
            take: numberPerPage,
            skip: numberPerPage * (page - 1)
        });
        return reports;
    }
    async getOne(id: string): Promise<ReportsRO> {
        const report = await this.reportsRepository.findOne({ where: { id } });
        if (!report) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return report;
    }
    async create(data: ReportsDTO): Promise<ReportsRO> {
        const report = await this.reportsRepository.create(data);
        await this.reportsRepository.save(report);
        return report;
    }
    async update(id: string, data: Partial<ReportsDTO>): Promise<ReportsRO> {
        let report = await this.reportsRepository.findOne({
            where: { id }
        });
        if (!report) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.reportsRepository.update(id, data);
        report = await this.reportsRepository.findOne({ where: { id } });
        return report;
    }
    async delete(id: string): Promise<ReportsRO> {
        const report = await this.reportsRepository.findOne({ where: { id } });
        if (!report) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.reportsRepository.remove(report);
        return report;
    }
}

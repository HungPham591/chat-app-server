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
        private readonly reportsRepository: Repository<ReportsEntity>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    private toCondition(user_id?: string, report_type_id?: string) {
        return {
            ...user_id && { user: { id: user_id } },
            ...report_type_id && { report_type: { id: report_type_id } }
        };
    }
    async get(page: number = 1, sizePerPage: number = 10, user?: string, report_type?: string): Promise<ReportTypesRO[]> {
        const numberPerPage = 10;
        const condition = this.toCondition(user, report_type);
        const reports = await this.reportsRepository.find({
            where: condition,
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

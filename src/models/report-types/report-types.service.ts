import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportTypesEntity } from './report_types.entity';

@Injectable()
export class ReportTypesService {
    constructor(
        @InjectRepository(ReportTypesEntity)
        private reportTypesRepository: Repository<ReportTypesEntity>
    ) { }
    async getAll() {

    }
    async get() {

    }
    async create() {

    }
    async update() {

    }
    async delete() {

    }
}

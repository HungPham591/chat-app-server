import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportsEntity } from './reports.entity';

@Injectable()
export class ReportsService {
    constructor(
        @InjectRepository(ReportsEntity)
        private reportsRepository: Repository<ReportsEntity>
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

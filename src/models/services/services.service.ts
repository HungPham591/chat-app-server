import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicesEntity } from './services.entity';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(ServicesEntity)
        private servicesRepository: Repository<ServicesEntity>
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

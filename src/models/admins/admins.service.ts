import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from './admins.entity';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepository: Repository<AdminEntity>
    ) { }
    async getAll() {

    }
    async get(name: string) {

    }
    async create() {

    }
    async update() {

    }
    async delete() {

    }
}

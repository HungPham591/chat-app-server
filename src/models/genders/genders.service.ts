import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GendersEntity } from './genders.entity';

@Injectable()
export class GendersService {
    constructor(
        @InjectRepository(GendersEntity)
        private genderRepository: Repository<GendersEntity>
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

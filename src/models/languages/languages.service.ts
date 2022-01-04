import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguagesEntity } from './languages.entity';

@Injectable()
export class LanguagesService {
    constructor(
        @InjectRepository(LanguagesEntity)
        private languagesRepository: Repository<LanguagesEntity>
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

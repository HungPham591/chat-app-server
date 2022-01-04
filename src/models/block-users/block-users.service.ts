import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlockUserEntity } from './block_users.entity';

@Injectable()
export class BlockUsersService {
    constructor(
        @InjectRepository(BlockUserEntity)
        private blockUserRepository: Repository<BlockUserEntity>
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

import { GendersRO, GendersDTO } from './genders.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GendersEntity } from './genders.entity';

@Injectable()
export class GendersService {
    constructor(
        @InjectRepository(GendersEntity)
        private genderRepository: Repository<GendersEntity>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    async get(): Promise<GendersRO[]> {
        const gender = await this.genderRepository.find();
        return gender;
    }
    async getOne(id: string): Promise<GendersRO> {
        const gender = await this.genderRepository.findOne({ where: { id } });
        if (!gender) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return gender;

    }
    async create(data: GendersDTO): Promise<GendersRO> {
        this.ensureOwnership('adminId');
        const gender = await this.genderRepository.create(data);
        await this.genderRepository.save(gender);
        return gender;
    }
    async update(id: string, data: Partial<GendersDTO>): Promise<GendersRO> {
        this.ensureOwnership('adminId');
        let gender = await this.genderRepository.findOne({ where: { id } });
        if (!gender) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.genderRepository.update(id, data);
        gender = await this.genderRepository.findOne({ where: { id } });
        return gender;
    }
    async delete(id: string): Promise<GendersRO> {
        this.ensureOwnership('adminId');
        const gender = await this.genderRepository.findOne({ where: id });
        if (!gender) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.genderRepository.remove(gender);
        return gender;
    }
}

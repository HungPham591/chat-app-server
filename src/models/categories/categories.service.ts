import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesEntity } from './categories.entity';
import { CategoriesRO, CategoriesDTO } from './categories.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoriesEntity)
        private categoriesRepository: Repository<CategoriesEntity>
    ) { }
    private async ensureOwnership(adminId: string) {

    }
    async get(page: number = 1): Promise<CategoriesRO[]> {
        const numberPerPage = 10;
        const categories = await this.categoriesRepository.find({
            take: numberPerPage,
            skip: numberPerPage * (page - 1)
        })
        return categories;
    }
    async getOne(id: string): Promise<CategoriesRO> {
        const category = await this.categoriesRepository.findOne({
            where: { id }
        })
        if (!category) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return category;
    }
    async create(data: CategoriesDTO): Promise<CategoriesRO> {
        this.ensureOwnership('adminId');
        const category = await this.categoriesRepository.create(data);
        await this.categoriesRepository.save(category);
        return category;
    }
    async update(id: string, data: Partial<CategoriesDTO>): Promise<CategoriesRO> {
        this.ensureOwnership('adminId');
        let category = await this.categoriesRepository.findOne({
            where: { id }
        });
        if (!category) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.categoriesRepository.update({ id }, data);
        category = await this.categoriesRepository.findOne({
            where: { id }
        });
        return category;
    }
    async delete(id: string): Promise<CategoriesRO> {
        this.ensureOwnership('adminId');
        const category = await this.categoriesRepository.findOne({ where: { id } });
        if (!category) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.categoriesRepository.remove(category);
        return category;
    }
}

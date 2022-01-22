import { AdminsService } from './../admins/admins.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesEntity } from './categories.entity';
import { CategoriesRO, CategoriesDTO } from './categories.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoriesEntity)
        private readonly categoriesRepository: Repository<CategoriesEntity>,
        private readonly adminsService: AdminsService
    ) { }
    private async isAdmin(adminId: string) {
        this.adminsService.getOne(adminId);
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
        this.isAdmin('adminId');
        const category = await this.categoriesRepository.create(data);
        await this.categoriesRepository.save(category);
        return category;
    }
    async update(id: string, data: Partial<CategoriesDTO>): Promise<CategoriesRO> {
        this.isAdmin('adminId');
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
        this.isAdmin('adminId');
        const category = await this.categoriesRepository.findOne({ where: { id } });
        if (!category) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.categoriesRepository.softRemove(category);
        return category;
    }
    async restore(id: string): Promise<CategoriesRO> {
        this.isAdmin('adminID');
        let category = await this.categoriesRepository.findOne({ where: { id }, withDeleted: true });
        if (!category) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.categoriesRepository.restore(category);
        category = await this.categoriesRepository.findOne({ where: { id } });
        return category;
    }
}

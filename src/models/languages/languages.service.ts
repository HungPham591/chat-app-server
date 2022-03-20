import { AdminsService } from './../admins/admins.service';
import { LanguagesRO, LanguagesDTO } from './languages.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguagesEntity } from './languages.entity';

@Injectable()
export class LanguagesService {
    constructor(
        @InjectRepository(LanguagesEntity)
        private readonly languagesRepository: Repository<LanguagesEntity>,
        private readonly adminsService: AdminsService
    ) { }
    private async isAdmin(adminId: string) {
        this.adminsService.getOne(adminId);
    }
    async get(page: number = 1, sizePerPage: number = 10): Promise<LanguagesRO[]> {
        const languages = await this.languagesRepository.find();
        return languages;
    }
    async getOne(id: string): Promise<LanguagesRO> {
        const language = await this.languagesRepository.findOne({ where: { id } });
        if (!language) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return language;
    }
    async create(data: LanguagesDTO): Promise<LanguagesRO> {
        this.isAdmin('adminId');
        const language = await this.languagesRepository.create(data);
        await this.languagesRepository.save(language);
        return language;
    }
    async update(id: string, data: Partial<LanguagesDTO>): Promise<LanguagesRO> {
        this.isAdmin('adminId');
        let language = await this.languagesRepository.findOne({ where: { id } });
        if (!language) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.languagesRepository.update(id, language);
        language = await this.languagesRepository.findOne({ where: { id } });
        return language;
    }
    async delete(id: string): Promise<LanguagesRO> {
        this.isAdmin('adminId');
        const language = await this.languagesRepository.findOne({ where: { id } });
        if (!language) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.languagesRepository.softRemove(language);
        return language;
    }
    async restore(id: string): Promise<LanguagesRO> {
        this.isAdmin('adminId');
        let language = await this.languagesRepository.findOne({ where: { id }, withDeleted: true });
        if (!language) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        await this.languagesRepository.restore(language);
        language = await this.languagesRepository.findOne({ where: { id } });
        return language;
    }
}

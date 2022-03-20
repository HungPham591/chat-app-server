import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsModule } from './../admins/admins.module';
import { CategoriesEntity } from './categories.entity';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesEntity]), AdminsModule],
  providers: [CategoriesService, CategoriesResolver],
  exports: [CategoriesService]
})
export class CategoriesModule { }

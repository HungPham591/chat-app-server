import { AdminsModule } from './../admins/admins.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesEntity } from './categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesEntity]), AdminsModule],
  providers: [CategoriesService, CategoriesResolver],
  exports: [CategoriesService]
})
export class CategoriesModule { }

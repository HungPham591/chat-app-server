import { AdminsModule } from './../admins/admins.module';
import { LanguagesEntity } from './languages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LanguagesResolver } from './languages.resolver';
import { LanguagesService } from './languages.service';

@Module({
  imports: [TypeOrmModule.forFeature([LanguagesEntity]), AdminsModule],
  providers: [LanguagesResolver, LanguagesService],
  exports: [LanguagesService]
})
export class LanguagesModule { }

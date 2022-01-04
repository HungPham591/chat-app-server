import { LanguagesEntity } from './languages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LanguagesResolver } from './languages.resolver';
import { LanguagesService } from './languages.service';

@Module({
  imports: [TypeOrmModule.forFeature([LanguagesEntity])],
  providers: [LanguagesResolver, LanguagesService]
})
export class LanguagesModule { }

import { GendersEntity } from './genders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersResolver } from './genders.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([GendersEntity])],
  providers: [GendersService, GendersResolver]
})
export class GendersModule { }

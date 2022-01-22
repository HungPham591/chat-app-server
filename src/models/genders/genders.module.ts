import { AdminsModule } from './../admins/admins.module';
import { GendersEntity } from './genders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersResolver } from './genders.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([GendersEntity]), AdminsModule],
  providers: [GendersService, GendersResolver],
  exports: [GendersService]
})
export class GendersModule { }

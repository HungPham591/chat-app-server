import { AdminEntity } from './admins.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsResolver } from './admins.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  providers: [AdminsService, AdminsResolver],
  exports: [AdminsService]
})
export class AdminsModule { }

import { AdminsModule } from './../admins/admins.module';
import { ServicesEntity } from './services.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ServicesResolver } from './services.resolver';
import { ServicesService } from './services.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServicesEntity]), AdminsModule],
  providers: [ServicesResolver, ServicesService],
  exports: [ServicesService]
})
export class ServicesModule { }

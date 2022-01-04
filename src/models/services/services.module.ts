import { ServicesEntity } from './services.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ServicesResolver } from './services.resolver';
import { ServicesService } from './services.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServicesEntity])],
  providers: [ServicesResolver, ServicesService]
})
export class ServicesModule { }

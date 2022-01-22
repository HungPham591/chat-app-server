import { ReportsEntity } from './reports.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsResolver } from './reports.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ReportsEntity])],
  providers: [ReportsService, ReportsResolver],
  exports: [ReportsService]
})
export class ReportsModule { }

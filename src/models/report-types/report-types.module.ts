import { ReportTypesEntity } from './report_types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReportTypesResolver } from './report-types.resolver';
import { ReportTypesService } from './report-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReportTypesEntity])],
  providers: [ReportTypesResolver, ReportTypesService]
})
export class ReportTypesModule { }

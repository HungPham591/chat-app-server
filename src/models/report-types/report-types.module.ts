import { AdminsModule } from './../admins/admins.module';
import { ReportTypesEntity } from './report_types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReportTypesResolver } from './report-types.resolver';
import { ReportTypesService } from './report-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReportTypesEntity]), AdminsModule],
  providers: [ReportTypesResolver, ReportTypesService],
  exports: [ReportTypesService]
})
export class ReportTypesModule { }

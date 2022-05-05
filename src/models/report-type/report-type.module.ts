import { ReportType, ReportTypeSchema } from './entities/report-type.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ReportTypeService } from './report-type.service';
import { ReportTypeResolver } from './report-type.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: ReportType.name, schema: ReportTypeSchema }])],
  providers: [ReportTypeResolver, ReportTypeService],
  exports: [ReportTypeService],
})
export class ReportTypeModule { }

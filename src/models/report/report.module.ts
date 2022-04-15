import { UserModule } from './../user/user.module';
import { Report, ReportSchema } from './entities/report.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportResolver } from './report.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]), UserModule],
  providers: [ReportResolver, ReportService],
  exports: [ReportService]
})
export class ReportModule { }

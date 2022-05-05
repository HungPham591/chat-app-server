import { BaseService } from './../base/base.service';
import { ReportType, ReportTypeDocument } from './entities/report-type.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateReportTypeInput } from './dto/create-report-type.input';
import { UpdateReportTypeInput } from './dto/update-report-type.input';
import { Model } from 'mongoose';

@Injectable()
export class ReportTypeService extends BaseService {
  constructor(@InjectModel(ReportType.name) private readonly reportTypeModel: Model<ReportTypeDocument>) {
    super();
  }
  async create(createReportTypeInput: CreateReportTypeInput) {
    const reportType = await new this.reportTypeModel(createReportTypeInput).save();
    return reportType;
  }

  async findAll() {
    return await this.reportTypeModel.find();
  }

  async findById(id: string) {
    return await this.reportTypeModel.findById(id);
  }

  async update(id: string, updateReportTypeInput: UpdateReportTypeInput) {
    return await this.reportTypeModel.findByIdAndUpdate(id, updateReportTypeInput);
  }

  async remove(id: string) {
    return await this.reportTypeModel.findByIdAndDelete(id);
  }
}

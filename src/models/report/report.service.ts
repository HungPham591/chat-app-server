import { UserService } from './../user/user.service';
import { BaseService } from './../base/base.service';
import { GetReportArgs } from './dto/get-report.args';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Constants } from 'src/constants/Constants';
import { Report } from 'src/models/report/entities/report.entity';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { ReportDocument } from './entities/report.entity';

@Injectable()
export class ReportService extends BaseService {
  constructor(
    @InjectModel(Report.name) private readonly reportModel: Model<ReportDocument>,
    private readonly userService: UserService
  ) {
    super();
  }
  async create(createReportInput: CreateReportInput, ownerId: string): Promise<Report> {
    const reportData = { ...createReportInput, user_send: ownerId };
    const report = await new this.reportModel(reportData).save();
    await Promise.all([
      this.userService.addReportSend(report.user_send, report._id),
      this.userService.addReportReceive(report.user_receive, report._id)
    ]);
    return report;
  }

  async findAll(getReportArgs: GetReportArgs): Promise<Report[]> {
    const condition = this.argsToCondition(getReportArgs);
    return await this.reportModel.find(condition).skip(getReportArgs.offset).limit(getReportArgs.limit).lean().exec();
  }

  async findById(id: string): Promise<Report> {
    const report = await this.reportModel.findById(id).lean().exec();
    if (!report) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return report;
  }

  async update(id: string, updateReportInput: UpdateReportInput, ownerId: string): Promise<Report> {
    const report = await this.findById(id);
    this.ensureOwnership(report.user_send, ownerId);
    return await this.reportModel.findByIdAndUpdate(id, updateReportInput).exec();
  }

  async remove(id: string, ownerId: string): Promise<Report> {
    let report = await this.findById(id);
    this.ensureOwnership(report.user_send, ownerId);
    report = await this.reportModel.findByIdAndDelete(id).exec();
    await Promise.all([
      this.userService.removeReportSend(report.user_send, report._id),
      this.userService.removeReportReceive(report.user_receive, report._id)
    ]);
    return report;
  }
}

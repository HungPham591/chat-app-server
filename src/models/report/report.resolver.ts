import { UserToken } from './../auth/entities/user-token.entity';
import { BaseResolver } from './../base/base.resolver';
import { GetReportArgs } from './dto/get-report.args';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReportService } from './report.service';
import { Report } from './entities/report.entity';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { Constants } from 'src/constants/Constants';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'src/utils/Interface';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Resolver(() => Report)
export class ReportResolver extends BaseResolver {
  constructor(private readonly reportService: ReportService) {
    super();
  }

  @Mutation(() => Report)
  @UseGuards(JwtAuthGuard)
  async createReport(@Args('createReportInput') createReportInput: CreateReportInput, @CurrentUser() user: UserToken) {
    return this.reportService.create(createReportInput, user.id);
  }

  @Query(() => [Report])
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAllReport(@Args('getReportArgs') getReportArgs: GetReportArgs) {
    return this.reportService.findAll(getReportArgs);
  }

  @Query(() => Report)
  findReportById(@Args('id', { type: () => String }) id: string) {
    return this.reportService.findById(id);
  }

  @Query(() => Report)
  findOneReportWithUserSendAndUserReceive(@Args('id', { type: () => String }) id: string) {
    return this.reportService.findById(id);
  }

  // @Mutation(() => Report)
  // updateReport(@Args('updateReportInput') updateReportInput: UpdateReportInput) {
  //   return this.reportService.update(updateReportInput._id, updateReportInput);
  // }

  // @Mutation(() => Report)
  // removeReport(@Args('id', { type: () => String }) id: string) {
  //   return this.reportService.remove(id);
  // }
}

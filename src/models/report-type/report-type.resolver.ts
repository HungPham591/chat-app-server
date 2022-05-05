import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReportTypeService } from './report-type.service';
import { ReportType } from './entities/report-type.entity';
import { CreateReportTypeInput } from './dto/create-report-type.input';
import { UpdateReportTypeInput } from './dto/update-report-type.input';

@Resolver(() => ReportType)
export class ReportTypeResolver {
  constructor(private readonly reportTypeService: ReportTypeService) { }

  @Mutation(() => ReportType)
  createReportType(@Args('createReportTypeInput') createReportTypeInput: CreateReportTypeInput) {
    return this.reportTypeService.create(createReportTypeInput);
  }

  @Query(() => [ReportType])
  findReportType() {
    return this.reportTypeService.findAll();
  }

  @Query(() => ReportType)
  findReportTypeById(@Args('id', { type: () => String }) id: string) {
    return this.reportTypeService.findById(id);
  }

  @Mutation(() => ReportType)
  updateReportType(@Args('updateReportTypeInput') updateReportTypeInput: UpdateReportTypeInput) {
    return this.reportTypeService.update(updateReportTypeInput._id, updateReportTypeInput);
  }

  @Mutation(() => ReportType)
  removeReportType(@Args('id', { type: () => String }) id: string) {
    return this.reportTypeService.remove(id);
  }
}

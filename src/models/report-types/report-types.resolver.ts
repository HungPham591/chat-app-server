import { ReportTypesDTO } from './report_types.dto';
import { ReportTypesService } from './report-types.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class ReportTypesResolver {
    constructor(
        private readonly reportTypesService: ReportTypesService
    ) { }
    @Query()
    async reportType(
        @Args('id') id: string
    ) {

    }
    @Query()
    async reportTypes() {

    }
    @Mutation()
    async createReportType(
        @Args() { name }: ReportTypesDTO
    ) {

    }
    @Mutation()
    async updateReportType(
        @Args('id') id: string,
        @Args() { name }: ReportTypesDTO
    ) {

    }
    @Mutation()
    async deleteReportType(
        @Args('id') id: string
    ) {

    }
    @Mutation()
    async restoreReportType(
        @Args('id') id: string
    ) {

    }
}

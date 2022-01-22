import { ReportsDTO } from './reports.dto';
import { ReportsService } from './reports.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class ReportsResolver {
    constructor(
        private readonly reportsService: ReportsService
    ) { }
    @Query()
    async report(
        @Args('id') id: string
    ) {

    }
    @Query()
    async reports(
        @Args('page') page: number,
        @Args('user') user: string,
        @Args('report_type') report_type: string
    ) {

    }
    @Mutation()
    async createReport(
        @Args() { type, user_send, user_receive }: ReportsDTO
    ) {

    }
    @Mutation()
    async deleteReport(
        @Args('id') id: string
    ) {

    }
}

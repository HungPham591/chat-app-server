import { Field, InputType } from "@nestjs/graphql";
import { IsMongoId } from 'class-validator';
import { PaginationArgs } from 'src/models/base/base.args';

@InputType()
export class GetReportTypeArgs extends PaginationArgs {

}
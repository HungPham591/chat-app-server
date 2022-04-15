import { Field, InputType } from "@nestjs/graphql";
import { IsString } from 'class-validator';
import { PaginationArgs } from "src/models/base/base.args";

@InputType()
export class GetCategoryArgs extends PaginationArgs {
    @Field(type => String, { nullable: true })
    @IsString()
    name?: string;
}
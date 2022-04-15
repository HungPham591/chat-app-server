import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean } from 'class-validator';
import { PaginationArgs } from "src/models/base/base.args";

@InputType()
export class GetFacebookAccountArgs extends PaginationArgs {
    @Field(type => Boolean, { nullable: true })
    @IsBoolean()
    is_active: boolean;
}
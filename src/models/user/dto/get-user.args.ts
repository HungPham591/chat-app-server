import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsMongoId } from "class-validator";
import { PaginationArgs } from "src/models/base/base.args";

@InputType()
export class GetUserArgs extends PaginationArgs {
    @Field(type => String, { nullable: true })
    @IsMongoId()
    category: string;

    @Field(type => Boolean, { nullable: true })
    @IsBoolean()
    near_me: boolean;
}
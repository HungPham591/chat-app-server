import { ArgsType, Field, ID, InputType } from "@nestjs/graphql";
import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class GetOneAdminArgs {
    @Field(type => String)
    @IsString()
    @IsNotEmpty()
    name: string;
}
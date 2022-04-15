import { ArgsType, Field, ID } from "@nestjs/graphql";
import { IsMongoId, IsNotEmpty } from "class-validator";

@ArgsType()
export class DeletePostArgs {
    @Field(type => ID, { nullable: true })
    @IsMongoId()
    @IsNotEmpty()
    _id: string;
}
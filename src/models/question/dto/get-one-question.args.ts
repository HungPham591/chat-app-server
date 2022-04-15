import { ArgsType, Field, ID, InputType } from "@nestjs/graphql";
import { IsMongoId, IsNotEmpty } from "class-validator";

@InputType()
export class GetOneQuestionArgs {
    @Field(type => ID, { nullable: true })
    @IsMongoId()
    @IsNotEmpty()
    _id: string;
}
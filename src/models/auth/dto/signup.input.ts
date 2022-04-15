import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { IsArray, IsEnum, IsInt, IsString, Min } from "class-validator";
import { Gender } from "src/utils/Interface";

@InputType()
export class SignupInput {
    @Field(type => String, { nullable: true })
    @IsString()
    token_id?: string;

    @Field(type => Int, { nullable: true })
    @IsEnum(Gender)
    interested_in_gender?: Gender;

    @Field(type => Int, { nullable: true })
    @IsEnum(Gender)
    gender?: Gender;

    @Field(type => Int, { nullable: true })
    @IsInt()
    @Min(1900)
    birthday?: number;

    @Field(type => String, { nullable: true })
    @IsString()
    avatar?: string

    @Field(type => String, { nullable: true })
    @IsString()
    locale?: string;

    @Field(type => String, { nullable: true })
    @IsString()
    bio?: string;

    @Field(type => [Float], { nullable: true })
    @IsArray()
    coordinate?: number[];
}
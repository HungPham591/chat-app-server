import { Field, Float, ID, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsArray, IsEnum, IsInt, IsMongoId, IsNotEmpty, IsString, Min } from 'class-validator';
import { Gender } from './../../../utils/Interface';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  _id?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  name?: string;

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
  @IsNotEmpty()
  avatar?: string

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  locale?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  bio?: string;

  @Field(type => [Float], { nullable: true })
  @IsArray()
  coordinate?: number[];
}

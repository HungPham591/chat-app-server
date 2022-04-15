import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { Gender } from './../../../utils/Interface';


@InputType()
export class CreateUserInput {
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

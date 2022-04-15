import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
	@Field(type => String, { nullable: true })
	@IsString()
	@IsNotEmpty()
	title?: string;

	@Field(type => String, { nullable: true })
	@IsString()
	@IsNotEmpty()
	content?: string;

	@Field(type => String, { nullable: true })
	@IsMongoId()
	@IsNotEmpty()
	category: string;
}

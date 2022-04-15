import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateQuestionInput {
  @Field(type => String, { nullable: true })
  @IsString()
  title?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  content?: string;

  @Field(type => String, { nullable: true })
  @IsMongoId()
  @IsNotEmpty()
  category: string;
}

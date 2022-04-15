import { CreateQuestionInput } from './create-question.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  _id?: string;
}

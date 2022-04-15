import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';
import { CreatePostInput } from './create-post.input';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(type => ID)
  @IsMongoId()
  _id?: string;
}

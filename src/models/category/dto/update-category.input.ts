import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength, } from 'class-validator';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  @IsNotEmpty()
  _id?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  name?: string;
}

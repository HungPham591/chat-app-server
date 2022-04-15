import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, MinLength, } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  name?: string;
}

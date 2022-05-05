import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAchievementInput {
  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  description: string;
}

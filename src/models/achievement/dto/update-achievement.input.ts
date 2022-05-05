import { CreateAchievementInput } from './create-achievement.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateAchievementInput extends PartialType(CreateAchievementInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  _id?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  description?: string;
}

import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateFacebookAccountInput {
  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  facebook_id?: string;

  @Field(type => String, { nullable: true })
  @IsMongoId()
  @IsNotEmpty()
  user?: string;
}

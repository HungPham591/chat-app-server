import { CreateFacebookAccountInput } from './create-facebook-account.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateFacebookAccountInput extends PartialType(CreateFacebookAccountInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  @IsNotEmpty()
  _id?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  facebook_id?: string;
}

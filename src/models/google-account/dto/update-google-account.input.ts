import { CreateGoogleAccountInput } from './create-google-account.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateGoogleAccountInput extends PartialType(CreateGoogleAccountInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  @IsNotEmpty()
  _id?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  google_id?: string;
}

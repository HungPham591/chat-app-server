import { CreateAdminInput } from './create-admin.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateAdminInput extends PartialType(CreateAdminInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  @IsNotEmpty()
  _id?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  name?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  password?: string;
}

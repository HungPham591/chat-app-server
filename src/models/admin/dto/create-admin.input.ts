import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';


@InputType()//de tao input object
export class CreateAdminInput {
  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  name?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  password?: string;
}

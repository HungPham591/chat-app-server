import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateReportInput {
  @Field(type => String, { nullable: true })
  @IsMongoId()
  @IsNotEmpty()
  user_receive?: string;
}

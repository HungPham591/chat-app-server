import { CreateReportTypeInput } from './create-report-type.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateReportTypeInput extends PartialType(CreateReportTypeInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  _id?: string;

  @Field(type => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  name?: string;
}

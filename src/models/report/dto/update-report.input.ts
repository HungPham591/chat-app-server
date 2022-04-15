import { CreateReportInput } from './create-report.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class UpdateReportInput extends PartialType(CreateReportInput) {
  @Field(type => ID, { nullable: true })
  @IsMongoId()
  _id?: string;
}

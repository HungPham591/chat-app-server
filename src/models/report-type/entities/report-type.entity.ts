import { BaseEntity } from './../../base/base.entity';
import { SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';

export type ReportTypeDocument = ReportType & Document;

@Schema()
@ObjectType()
export class ReportType extends BaseEntity {
  @Field(type => ID, { nullable: true })
  _id: string;

  @Field(type => String, { nullable: true })
  @Prop({ type: String, required: true })
  name?: string;
}

export const ReportTypeSchema = SchemaFactory.createForClass(ReportType);
import { SchemaFactory } from '@nestjs/mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { BaseEntity } from './../../base/base.entity';
import { type } from 'os';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

export type AchievementDocument = Achievement & Document;

@Schema()
@ObjectType()
export class Achievement extends BaseEntity {
  @Field(type => ID, { nullable: true })
  _id: string;

  @Field(type => String, { nullable: true })
  @Prop({ type: String, required: true })
  name?: string;

  @Field(type => String, { nullable: true })
  @Prop({ type: String, required: true })
  description?: string;
}

export const AchievementSchema = SchemaFactory.createForClass

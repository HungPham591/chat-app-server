import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PostsDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
    @Prop()
    user_id: string;

    @Prop()
    gender_id: string;

    @Prop()
    interested_in_gender_id: string;

    @Prop()
    category_id: string;

    @Prop()
    service_id: string;

    @Prop()
    language_id: string;

    @Prop()
    image_link: string;

    @Prop()
    content: string;

    @Prop()
    birthday: number;

    @Prop()
    createdAt?: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
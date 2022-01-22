import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './posts.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  providers: [PostsResolver, PostsService],
  exports: [PostsService]
})
export class PostsModule { }

import { SocketGatewayModule } from './../socket-gateway/socket-gateway.module';
import { UserModule } from './../user/user.module';

import { Post, PostSchema } from './entities/post.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]), UserModule, SocketGatewayModule],
  providers: [PostResolver, PostService],
  exports: [PostService]
})
export class PostModule { }

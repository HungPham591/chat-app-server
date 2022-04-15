import { UserToken } from './../auth/entities/user-token.entity';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BaseResolver } from './../base/base.resolver';
import { CreatePostInput } from './dto/create-post.input';
import { GetPostArgs } from './dto/get-post.args';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Resolver(() => Post)
export class PostResolver extends BaseResolver {
  constructor(private readonly postService: PostService) {
    super();
  }

  @Mutation(() => Post)
  @UseGuards(JwtAuthGuard)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput, @CurrentUser() user: UserToken) {
    return this.postService.create(createPostInput, user.id);
  }

  @Query(() => [Post])
  findAllPost(@Args('getPostArgs') getPostArgs: GetPostArgs) {
    return this.postService.findAll(getPostArgs);
  }

  @Query(() => [Post])
  findAllPostWithUserAndQuestion(@Args('getPostArgs') getPostArgs: GetPostArgs) {
    return this.postService.findAll(getPostArgs);
  }

  @Query(() => Post)
  findPostById(@Args('id', { type: () => String }) id: string) {
    return this.postService.findById(id);
  }

  @Query(() => Post)
  findOnePostWithUserAndQuestion(@Args('id', { type: () => String }) id: string) {
    return this.postService.findById(id);
  }

  @Mutation(() => Post)
  @UseGuards(JwtAuthGuard)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput, @CurrentUser() user: UserToken) {
    return this.postService.update(updatePostInput._id, updatePostInput, user.id);
  }

  @Mutation(() => Post)
  @UseGuards(JwtAuthGuard)
  removePost(@Args('id', { type: () => String }) id: string, @CurrentUser() user: UserToken) {
    return this.postService.remove(id, user.id);
  }
}

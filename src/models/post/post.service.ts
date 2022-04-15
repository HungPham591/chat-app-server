import { SocketEvent } from './../../utils/Interface';
import { SocketGatewayService } from './../socket-gateway/socket-gateway.service';
import { UserService } from './../user/user.service';
import { BaseService } from './../base/base.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostInput } from './dto/create-post.input';
import { GetPostArgs } from './dto/get-post.args';
import { UpdatePostInput } from './dto/update-post.input';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostService extends BaseService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
    private readonly userService: UserService,
    private readonly socketGatewayService: SocketGatewayService
  ) {
    super();
  }
  async create(createPostInput: CreatePostInput, ownerId: string): Promise<Post> {
    const postData = { ...createPostInput, user: ownerId };
    const post = await new this.postModel(postData).save();
    await this.userService.addPost(post.user, post._id);
    this.socketGatewayService.sendNotificationToAllUser(SocketEvent.NEW_POST);
    return post;
  }

  async findAll(getPostArgs: GetPostArgs): Promise<Post[]> {
    const condition = this.argsToCondition(getPostArgs);
    return await this.postModel.find(condition).skip(getPostArgs.offset).limit(getPostArgs.limit).lean().exec();
  }

  async findById(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).lean().exec();
    if (!post) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return post;
  }

  async update(id: string, updatePostInput: UpdatePostInput, ownerId: string): Promise<Post> {
    const post = await this.findById(id);
    this.ensureOwnership(post.user, ownerId);
    return await this.postModel.findByIdAndUpdate(updatePostInput).exec();
  }

  async remove(id: string, ownerId: string): Promise<Post> {
    let post = await this.findById(id);
    this.ensureOwnership(post.user, ownerId);
    post = await this.postModel.findByIdAndDelete(id).exec();
    await this.userService.removePost(post.user, post._id);
    return post;
  }
}

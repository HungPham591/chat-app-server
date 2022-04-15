import { SocketEvent } from './../../utils/Interface';
import { Message } from './../socket-gateway/entities/message.entities';
import { SocketGatewayService } from './../socket-gateway/socket-gateway.service';
import { BaseService } from './../base/base.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user/entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { GetUserArgs } from './dto/get-user.args';
import { UpdateUserInput } from './dto/update-user.input';
import { UserDocument } from './entities/user.entity';
import * as _ from 'lodash';

@Injectable()
export class UserService extends BaseService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly socketGatewayService: SocketGatewayService
  ) {
    super();
  }
  async create(createUserInput: CreateUserInput): Promise<User> {
    return await new this.userModel(createUserInput).save();
  }

  async findAll(getUserArgs: GetUserArgs): Promise<User[]> {
    const condition = this.argsToCondition(getUserArgs);
    return await this.userModel.find(condition).skip(getUserArgs.offset).limit(getUserArgs.limit).lean().exec();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).lean().exec();
    if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }

  async addFriend(idUserSend: string, idUserReceive: string): Promise<User> {//??
    const user = await this.findById(idUserSend);
    user.friends.push(idUserReceive);
    await this.update(user._id, user);
    return user;
  }

  async addFriendRequestSend(idUserSend: string, idUserReceive: string): Promise<User> {//??
    const user = await this.findById(idUserSend);
    user.friend_request_send.push(idUserReceive);
    await this.update(user._id, user);
    return user;
  }

  async addFriendRequestReceive(idUserSend: string, idUserReceive: string): Promise<User> {//??
    const user = await this.findById(idUserReceive);
    user.friend_request_receive.push(idUserSend);
    await this.update(user._id, user);
    return user;
  }

  async addReportSend(idUser: string, idUserReport: string): Promise<User> {//??
    const user = await this.findById(idUser);
    user.reports_send.push(idUserReport);
    await this.update(user._id, user);
    return user;
  }

  async addReportReceive(idUser: string, idUserReport: string): Promise<User> {//??
    const user = await this.findById(idUserReport);
    user.reports_receive.push(idUser);
    await this.update(user._id, user);
    return user;
  }

  async addQuestion(idUser: string, idQuestion: string): Promise<User> {//??
    const user = await this.findById(idUser);
    user.questions.push(idQuestion);
    await this.update(user._id, user);
    return user;
  }

  async addPost(idUser: string, idPost: string): Promise<User> {//??
    const user = await this.findById(idUser);
    user.posts.push(idPost);
    await this.update(user._id, user);
    return user;
  }

  async removeFriend(idUserSend: string, idUserReceive: string): Promise<User> {//??
    const user = await this.findById(idUserSend);
    _.remove(user.friends, e => e === idUserReceive);
    await this.update(user._id, user);
    return user;
  }

  async removePost(idUser: string, idPost: string): Promise<User> {
    const user = await this.findById(idUser);
    _.remove(user.posts, e => e === idPost);
    await this.update(user._id, user);
    return user;
  }

  async removeQuestion(idUser: string, idQuestion: string): Promise<User> {
    const user = await this.findById(idUser);
    _.remove(user.questions, e => e === idQuestion);
    await this.update(user._id, user);
    return user;
  }

  async removeReportSend(idUser: string, idReport: string): Promise<User> {
    const user = await this.findById(idUser);
    _.remove(user.reports_send, e => e === idReport);
    await this.update(user._id, user);
    return user;
  }

  async removeReportReceive(idUser: string, idReport: string): Promise<User> {
    const user = await this.findById(idUser);
    _.remove(user.reports_receive, e => e === idReport);
    await this.update(user._id, user);
    return user;
  }

  async softRemove(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }

  async sendFriendRequestAcceptNotification(userSendId: string, userReceiveId: string) {
    const msg: Message = {
      from: userSendId,
      to: userReceiveId,
      content: 'friend request accept',
      create_at: Date.now()
    };
    this.socketGatewayService.sendMessageToUser(msg, SocketEvent.FRIEND_REQUEST_ACCEPT, userSendId);
  }
  async sendFriendRequestNotification(userSendId: string, userReceiveId: string) {
    const msg: Message = {
      from: userSendId,
      to: userReceiveId,
      content: 'friend request',
      create_at: Date.now()
    };
    this.socketGatewayService.sendMessageToUser(msg, SocketEvent.FRIEND_REQUEST, userSendId);
  }
}

import { SocketEvent } from './../../utils/Interface';
import { SocketGatewayService } from './../socket-gateway/socket-gateway.service';
import { UserService } from './../user/user.service';
import { BaseService } from './../base/base.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionInput } from './dto/create-question.input';
import { GetQuestionArgs } from './dto/get-question.args';
import { UpdateQuestionInput } from './dto/update-question.input';
import { Question, QuestionDocument } from './entities/question.entity';

@Injectable()
export class QuestionService extends BaseService {
  constructor(
    @InjectModel(Question.name) private readonly questionModel: Model<QuestionDocument>,
    private readonly userService: UserService,
    private readonly socketGatewayService: SocketGatewayService
  ) {
    super();
  }

  async create(createQuestionInput: CreateQuestionInput, ownerId: string): Promise<Question> {
    const questionData = { ...createQuestionInput, user: ownerId };
    const question = await new this.questionModel(questionData).save();
    await this.userService.addPost(question.user, question._id);
    this.socketGatewayService.sendNotificationToAllUser(SocketEvent.NEW_QUESTION);
    return question;
  }

  async findAll(getQuestionArgs: GetQuestionArgs): Promise<Question[]> {
    const condition = this.argsToCondition(getQuestionArgs);
    return await this.questionModel.find(condition).skip(getQuestionArgs.offset).limit(getQuestionArgs.limit).lean().exec();
  }

  async findById(id: string): Promise<Question> {
    return await this.questionModel.findById(id).lean().exec();
  }

  async update(id: string, updateQuestionInput: UpdateQuestionInput, ownerId: string): Promise<Question> {
    const question = await this.findById(id);
    this.ensureOwnership(question.user, ownerId);
    return await this.questionModel.findByIdAndUpdate(id, updateQuestionInput);
  }

  async remove(id: string, ownerId: string): Promise<Question> {
    let question = await this.findById(id);
    this.ensureOwnership(question.user, ownerId);
    question = await this.questionModel.findByIdAndDelete(id);
    await this.userService.removeQuestion(question.user, question._id);
    return question;
  }
}

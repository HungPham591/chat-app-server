import { UserToken } from './../auth/entities/user-token.entity';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { BaseResolver } from './../base/base.resolver';
import { GetQuestionArgs } from './dto/get-question.args';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { Question } from './entities/question.entity';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';
import { Constants } from 'src/constants/Constants';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Resolver(() => Question)
export class QuestionResolver extends BaseResolver {
  constructor(private readonly questionService: QuestionService) {
    super();
  }

  @Mutation(() => Question)
  @UseGuards(JwtAuthGuard)
  createQuestion(@Args('createQuestionInput') createQuestionInput: CreateQuestionInput, @CurrentUser() user: UserToken) {
    return this.questionService.create(createQuestionInput, user.id);
  }

  @Query(() => [Question])
  findAllQuestion(@Args('getQuestionArgs') getQuestionArgs: GetQuestionArgs) {
    return this.questionService.findAll(getQuestionArgs);
  }

  @Query(() => [Question])
  findAllQuestionWithUser(@Args('getQuestionArgs') getQuestionArgs: GetQuestionArgs) {
    return this.questionService.findAll(getQuestionArgs);
  }

  @Query(() => Question)
  findQuestionById(@Args('id', { type: () => String }) id: string) {
    return this.questionService.findById(id);
  }
  @Query(() => Question)
  findOneQuestionWithUser(@Args('id', { type: () => String }) id: string) {
    return this.questionService.findById(id);
  }

  @Mutation(() => Question)
  @UseGuards(JwtAuthGuard)
  updateQuestion(@Args('updateQuestionInput') updateQuestionInput: UpdateQuestionInput, @CurrentUser() user: UserToken) {
    return this.questionService.update(updateQuestionInput._id, updateQuestionInput, user.id);
  }

  @Mutation(() => Question)
  @UseGuards(JwtAuthGuard)
  removeQuestion(@Args('id', { type: () => String }) id: string, @CurrentUser() user: UserToken) {
    return this.questionService.remove(id, user.id);
  }
}

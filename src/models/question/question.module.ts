import { SocketGatewayModule } from './../socket-gateway/socket-gateway.module';
import { UserModule } from './../user/user.module';
import { Question, QuestionSchema } from './entities/question.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema }]), UserModule, SocketGatewayModule],
  providers: [QuestionResolver, QuestionService],
  exports: [QuestionService]
})
export class QuestionModule { }

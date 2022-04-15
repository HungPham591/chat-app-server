import { SocketGatewayModule } from './../socket-gateway/socket-gateway.module';
import { User, UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), SocketGatewayModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule { }

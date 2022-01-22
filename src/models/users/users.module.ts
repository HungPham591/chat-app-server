import { AdminsModule } from './../admins/admins.module';
import { UserEntity } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AdminsModule],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule { }

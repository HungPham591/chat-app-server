import { AdminsModule } from './../admins/admins.module';
import { BlockUserEntity } from './block_users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BlockUsersService } from './block-users.service';
import { BlockUsersResolver } from './block-users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BlockUserEntity]), AdminsModule],
  providers: [BlockUsersService, BlockUsersResolver],
  exports: [BlockUsersService]
})
export class BlockUsersModule { }

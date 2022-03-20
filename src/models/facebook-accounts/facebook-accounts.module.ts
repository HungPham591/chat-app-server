import { FacebookAccountEntity } from './facebook-accounts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FacebookAccountsService } from './facebook-accounts.service';
import { FacebookAccountsResolver } from './facebook-accounts.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FacebookAccountEntity])],
  providers: [FacebookAccountsService, FacebookAccountsResolver],
  exports: [FacebookAccountsService],
})
export class FacebookAccountsModule { }

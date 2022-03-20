import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GooglesAccountEntity } from './google-account.entity';
import { GoogleAccountsResolver } from './google-accounts.resolver';
import { GoogleAccountsService } from './google-accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([GooglesAccountEntity])],
  providers: [GoogleAccountsService, GoogleAccountsResolver],
  exports: [GoogleAccountsService],
})
export class GoogleAccountsModule { }

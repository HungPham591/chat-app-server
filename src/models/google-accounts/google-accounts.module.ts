import { Module } from '@nestjs/common';
import { GoogleAccountsService } from './google-accounts.service';
import { GoogleAccountsResolver } from './google-accounts.resolver';

@Module({
  providers: [GoogleAccountsService, GoogleAccountsResolver]
})
export class GoogleAccountsModule {}

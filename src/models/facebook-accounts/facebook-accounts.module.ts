import { Module } from '@nestjs/common';
import { FacebookAccountsService } from './facebook-accounts.service';
import { FacebookAccountsResolver } from './facebook-accounts.resolver';

@Module({
  providers: [FacebookAccountsService, FacebookAccountsResolver]
})
export class FacebookAccountsModule {}

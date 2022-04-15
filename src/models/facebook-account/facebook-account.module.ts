
import { FacebookAccount, FacebookAccountSchema } from './entities/facebook-account.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FacebookAccountService } from './facebook-account.service';
import { FacebookAccountResolver } from './facebook-account.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: FacebookAccount.name, schema: FacebookAccountSchema }])],
  providers: [FacebookAccountResolver, FacebookAccountService],
  exports: [FacebookAccountService],
})
export class FacebookAccountModule { }

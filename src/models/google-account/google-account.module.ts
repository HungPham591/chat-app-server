import { GoogleAccount, GoogleAccountSchema } from './entities/google-account.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { GoogleAccountService } from './google-account.service';
import { GoogleAccountResolver } from './google-account.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: GoogleAccount.name, schema: GoogleAccountSchema }])],
  providers: [GoogleAccountResolver, GoogleAccountService],
  exports: [GoogleAccountService],
})
export class GoogleAccountModule { }

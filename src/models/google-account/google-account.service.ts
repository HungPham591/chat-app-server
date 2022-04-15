import { BaseService } from './../base/base.service';
import { GetGoogleAccountArgs } from './dto/get-google-account.args';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Constants } from 'src/constants/Constants';
import { User } from './../user/entities/user.entity';
import { CreateGoogleAccountInput } from './dto/create-google-account.input';
import { UpdateGoogleAccountInput } from './dto/update-google-account.input';
import { GoogleAccount, GoogleAccountDocument } from './entities/google-account.entity';

@Injectable()
export class GoogleAccountService extends BaseService {
  constructor(
    @InjectModel(GoogleAccount.name) private readonly googleAccountModel: Model<GoogleAccountDocument>
  ) {
    super();
  }
  async create(createGoogleAccountInput: CreateGoogleAccountInput): Promise<GoogleAccount> {
    return await new this.googleAccountModel(createGoogleAccountInput).save();
  }

  async findAll(getGoogleAccountArgs: GetGoogleAccountArgs): Promise<GoogleAccount[]> {
    const condition = this.argsToCondition(getGoogleAccountArgs);
    return await this.googleAccountModel.find(condition).lean().exec();
  }

  async findById(id: string): Promise<GoogleAccount> {
    const googleAccount = await this.googleAccountModel.findById(id).populate(User.name).lean().exec();
    if (!googleAccount) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return googleAccount;
  }

  async update(id: string, updateGoogleAccountInput: UpdateGoogleAccountInput, ownerId: string): Promise<GoogleAccount> {
    const googleAccount = await this.findById(id);
    this.ensureOwnership(googleAccount.user, ownerId);
    return await this.googleAccountModel.findByIdAndUpdate(id, updateGoogleAccountInput).exec();
  }

  async remove(id: string, ownerId: string): Promise<GoogleAccount> {
    const googleAccount = await this.findById(id);
    this.ensureOwnership(googleAccount.user, ownerId);
    return await this.googleAccountModel.findByIdAndDelete(id).exec();
  }
}

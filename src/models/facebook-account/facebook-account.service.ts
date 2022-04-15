import { BaseService } from './../base/base.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './../user/entities/user.entity';
import { CreateFacebookAccountInput } from './dto/create-facebook-account.input';
import { GetFacebookAccountArgs } from './dto/get-facebook-account.args';
import { UpdateFacebookAccountInput } from './dto/update-facebook-account.input';
import { FacebookAccount, FacebookAccountDocument } from './entities/facebook-account.entity';

@Injectable()
export class FacebookAccountService extends BaseService {
  constructor(
    @InjectModel(FacebookAccount.name) private readonly facebookAccountModel: Model<FacebookAccountDocument>
  ) {
    super();
  }
  async create(createFacebookAccountInput: CreateFacebookAccountInput): Promise<FacebookAccount> {
    return await new this.facebookAccountModel(createFacebookAccountInput).save();
  }

  async findAll(getFacebookAccountArgs: GetFacebookAccountArgs): Promise<FacebookAccount[]> {
    const condition = this.argsToCondition(getFacebookAccountArgs);
    return await this.facebookAccountModel.find(condition).lean().exec();
  }

  async findById(id: string): Promise<FacebookAccount> {
    const facebookAccount = await this.facebookAccountModel.findById(id).populate(User.name).lean().exec();
    if (!facebookAccount) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return facebookAccount;
  }

  async update(id: string, updateFacebookAccountInput: UpdateFacebookAccountInput, ownerId: string): Promise<FacebookAccount> {
    const facebookAccount = await this.findById(id);
    this.ensureOwnership(facebookAccount.user, ownerId);
    return await this.facebookAccountModel.findByIdAndUpdate(id, updateFacebookAccountInput).exec();
  }

  async remove(id: string, ownerId: string): Promise<FacebookAccount> {
    const facebookAccount = await this.findById(id);
    this.ensureOwnership(facebookAccount.user, ownerId);
    return await this.facebookAccountModel.findByIdAndDelete(id).exec();
  }

  async findByUser(userId: string) {
    return await this.facebookAccountModel.findOne({ user: userId });
  }

}

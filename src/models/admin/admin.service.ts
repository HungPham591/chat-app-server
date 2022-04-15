import { GetOneAdminArgs } from './dto/get-one-admin.args';
import { BaseService } from './../base/base.service';
import { GetAdminArgs } from './dto/get-admin.args';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Constants } from './../../constants/Constants';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { Admin, AdminDocument } from './entities/admin.entity';

@Injectable()
export class AdminService extends BaseService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<AdminDocument>
  ) {
    super();
  }
  async create(createAdminInput: CreateAdminInput): Promise<Admin> {
    return await new this.adminModel(createAdminInput).save();
  }

  async findOne(getOneAdminArgs: GetOneAdminArgs): Promise<Admin> {
    return await this.adminModel.findOne(getOneAdminArgs).lean().exec();
  }

  async findAll(getAdminArgs: GetAdminArgs): Promise<Admin[]> {
    const condition = this.argsToCondition(getAdminArgs);
    return await this.adminModel.find(condition).skip(getAdminArgs.offset).limit(getAdminArgs.limit).lean().exec();
  }

  async findById(id: string): Promise<Admin> {
    const admin = await this.adminModel.findById(id).lean().exec();
    if (!admin) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return admin;
  }

  async update(id: string, updateAdminInput: UpdateAdminInput): Promise<Admin> {
    return await this.adminModel.findByIdAndUpdate(id, updateAdminInput).exec();
  }

  async remove(id: string): Promise<Admin> {
    return await this.adminModel.findByIdAndDelete(id).exec();
  }
}

import { BaseService } from './../base/base.service';
import { Injectable } from '@nestjs/common';
import { CreateAchievementInput } from './dto/create-achievement.input';
import { UpdateAchievementInput } from './dto/update-achievement.input';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AchievementService extends BaseService {

  create(createAchievementInput: CreateAchievementInput) {
    return 'This action adds a new achievement';
  }

  findAll() {
    return `This action returns all achievement`;
  }

  findById(id: string) {
    return `This action returns a #${id} achievement`;
  }

  update(id: string, updateAchievementInput: UpdateAchievementInput) {
    return `This action updates a #${id} achievement`;
  }

  remove(id: string) {
    return `This action removes a #${id} achievement`;
  }
}

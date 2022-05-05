import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AchievementResolver } from './achievement.resolver';
import { AchievementService } from './achievement.service';
import { Achievement, AchievementSchema } from './entities/achievement.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Achievement.name, schema: AchievementSchema }])],
  providers: [AchievementResolver, AchievementService]
})
export class AchievementModule { }

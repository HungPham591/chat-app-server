import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AchievementService } from './achievement.service';
import { Achievement } from './entities/achievement.entity';
import { CreateAchievementInput } from './dto/create-achievement.input';
import { UpdateAchievementInput } from './dto/update-achievement.input';

@Resolver(() => Achievement)
export class AchievementResolver {
  constructor(private readonly achievementService: AchievementService) { }

  @Mutation(() => Achievement)
  createAchievement(@Args('createAchievementInput') createAchievementInput: CreateAchievementInput) {
    return this.achievementService.create(createAchievementInput);
  }

  @Query(() => [Achievement])
  findAllAchievement() {
    return this.achievementService.findAll();
  }

  @Query(() => Achievement)
  findAchievementById(@Args('id', { type: () => String }) id: string) {
    return this.achievementService.findById(id);
  }

  @Mutation(() => Achievement)
  updateAchievement(@Args('updateAchievementInput') updateAchievementInput: UpdateAchievementInput) {
    return this.achievementService.update(updateAchievementInput._id, updateAchievementInput);
  }

  @Mutation(() => Achievement)
  removeAchievement(@Args('id', { type: () => String }) id: string) {
    return this.achievementService.remove(id);
  }
}

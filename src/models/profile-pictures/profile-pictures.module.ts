import { Module } from '@nestjs/common';
import { ProfilePicturesService } from './profile-pictures.service';
import { ProfilePicturesResolver } from './profile-pictures.resolver';

@Module({
  providers: [ProfilePicturesService, ProfilePicturesResolver]
})
export class ProfilePicturesModule {}

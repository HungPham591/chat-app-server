import { Test, TestingModule } from '@nestjs/testing';
import { ProfilePicturesResolver } from './profile-pictures.resolver';

describe('ProfilePicturesResolver', () => {
  let resolver: ProfilePicturesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilePicturesResolver],
    }).compile();

    resolver = module.get<ProfilePicturesResolver>(ProfilePicturesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

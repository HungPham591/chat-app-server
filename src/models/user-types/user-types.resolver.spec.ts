import { Test, TestingModule } from '@nestjs/testing';
import { UserTypesResolver } from './user-types.resolver';

describe('UserTypesResolver', () => {
  let resolver: UserTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTypesResolver],
    }).compile();

    resolver = module.get<UserTypesResolver>(UserTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

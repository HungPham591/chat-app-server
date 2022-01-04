import { Test, TestingModule } from '@nestjs/testing';
import { BlockUsersResolver } from './block-users.resolver';

describe('BlockUsersResolver', () => {
  let resolver: BlockUsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockUsersResolver],
    }).compile();

    resolver = module.get<BlockUsersResolver>(BlockUsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FacebookAccountsResolver } from './facebook-accounts.resolver';

describe('FacebookAccountsResolver', () => {
  let resolver: FacebookAccountsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacebookAccountsResolver],
    }).compile();

    resolver = module.get<FacebookAccountsResolver>(FacebookAccountsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

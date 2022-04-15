import { Test, TestingModule } from '@nestjs/testing';
import { FacebookAccountResolver } from './facebook-account.resolver';
import { FacebookAccountService } from './facebook-account.service';

describe('FacebookAccountResolver', () => {
  let resolver: FacebookAccountResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacebookAccountResolver, FacebookAccountService],
    }).compile();

    resolver = module.get<FacebookAccountResolver>(FacebookAccountResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

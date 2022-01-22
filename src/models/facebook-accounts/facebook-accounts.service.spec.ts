import { Test, TestingModule } from '@nestjs/testing';
import { FacebookAccountsService } from './facebook-accounts.service';

describe('FacebookAccountsService', () => {
  let service: FacebookAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacebookAccountsService],
    }).compile();

    service = module.get<FacebookAccountsService>(FacebookAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

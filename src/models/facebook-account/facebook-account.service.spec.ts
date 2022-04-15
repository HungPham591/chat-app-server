import { Test, TestingModule } from '@nestjs/testing';
import { FacebookAccountService } from './facebook-account.service';

describe('FacebookAccountService', () => {
  let service: FacebookAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacebookAccountService],
    }).compile();

    service = module.get<FacebookAccountService>(FacebookAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

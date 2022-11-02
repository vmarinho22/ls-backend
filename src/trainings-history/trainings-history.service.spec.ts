import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsHistoryService } from './trainings-history.service';

describe('TrainingsHistoryService', () => {
  let service: TrainingsHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingsHistoryService],
    }).compile();

    service = module.get<TrainingsHistoryService>(TrainingsHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

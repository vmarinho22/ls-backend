import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsHistoryController } from './trainings-history.controller';
import { TrainingsHistoryService } from './trainings-history.service';

describe('TrainingsHistoryController', () => {
  let controller: TrainingsHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingsHistoryController],
      providers: [TrainingsHistoryService],
    }).compile();

    controller = module.get<TrainingsHistoryController>(TrainingsHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { TrainingsHistoryService } from './trainings-history.service';
import { TrainingsHistoryController } from './trainings-history.controller';

@Module({
  controllers: [TrainingsHistoryController],
  providers: [TrainingsHistoryService]
})
export class TrainingsHistoryModule {}

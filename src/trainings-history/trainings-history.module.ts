import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainingsHistoryRepository } from './repositories/trainings-history.repository';
import { TrainingsHistoryController } from './trainings-history.controller';
import { TrainingsHistoryService } from './trainings-history.service';

@Module({
  controllers: [TrainingsHistoryController],
  providers: [TrainingsHistoryService, TrainingsHistoryRepository, PrismaService]
})
export class TrainingsHistoryModule {}

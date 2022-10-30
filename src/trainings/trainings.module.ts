import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainingsRepository } from './repositories/trainings.repository';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';

@Module({
  controllers: [TrainingsController],
  providers: [TrainingsService, PrismaService, TrainingsRepository]
})
export class TrainingsModule {}

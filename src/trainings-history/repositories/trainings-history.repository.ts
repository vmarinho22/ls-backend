import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainingEntity } from 'src/trainings/entities/training.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { NotFoundError } from '../../common/errors/types/NotFoundError';
import { CreateTrainingsHistoryDto } from '../dto/create-trainings-history.dto';
import { UpdateTrainingsHistoryDto } from '../dto/update-trainings-history.dto';
import { TrainingsHistoryEntity } from '../entities/trainings-history.entity';

@Injectable()
export class TrainingsHistoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createTrainingsHistoryDto: CreateTrainingsHistoryDto
  ): Promise<TrainingsHistoryEntity> {
    return this.prisma.trainingHistory.create({
      data: createTrainingsHistoryDto,
      include: {
        training: true,
        user: true
      }
    });
  }

  async findAll(): Promise<TrainingsHistoryEntity[]> {
    return this.prisma.trainingHistory.findMany({
      include: {
        training: true,
        user: true
      }
    });
  }

  async findOne(id: number): Promise<TrainingsHistoryEntity> {
    return this.prisma.trainingHistory.findUnique({
      where: { id },
      include: {
        training: true,
        user: true
      }
    });
  }

  async update(
    id: number,
    updateTrainingsHistoryDto: UpdateTrainingsHistoryDto
  ): Promise<TrainingsHistoryEntity> {
    const { userId, trainingId } = updateTrainingsHistoryDto;

    if (userId !== null) {
      const userExists: UserEntity = await this.prisma.user.findUnique({ where: { id: userId } });

      if (!userExists) {
        throw new NotFoundError(`Usuário com ID #${userId} não encontrado`);
      }
    }

    if (trainingId !== null) {
      const trainingExists: TrainingEntity = await this.prisma.training.findUnique({
        where: { id: trainingId }
      });

      if (!trainingExists) {
        throw new NotFoundError(`Treinamento com ID #${trainingId} não encontrado`);
      }
    }

    const trainingHistory: TrainingsHistoryEntity = await this.prisma.trainingHistory.update({
      where: { id },
      data: updateTrainingsHistoryDto
    });

    return trainingHistory;
  }
}

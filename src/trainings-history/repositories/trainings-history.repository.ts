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
    const createdTrainingHistory = await this.prisma.trainingHistory.create({
      data: createTrainingsHistoryDto,
      include: {
        training: true,
        user: true
      }
    });

    delete createdTrainingHistory.user.password;
    delete createdTrainingHistory.userId;
    delete createdTrainingHistory.trainingId;

    return createdTrainingHistory;
  }

  async findAll(): Promise<TrainingsHistoryEntity[]> {
    const trainingsHistory = await this.prisma.trainingHistory.findMany({
      include: {
        training: true,
        user: true
      }
    });

    return trainingsHistory.map(item => {
      delete item.user.password;
      delete item.userId;
      delete item.trainingId;

      return item;
    });
  }

  async findOne(id: number): Promise<TrainingsHistoryEntity> {
    const trainingHistory = await this.prisma.trainingHistory.findUnique({
      where: { id },
      include: {
        training: true,
        user: true
      }
    });

    delete trainingHistory.user.password;
    delete trainingHistory.userId;
    delete trainingHistory.trainingId;

    return trainingHistory;
  }

  async findByUser(user: number): Promise<TrainingsHistoryEntity[]> {
    const trainingsHistory = await this.prisma.trainingHistory.findMany({
      where: {
        userId: user
      },
      include: {
        training: true
      }
    });

    return trainingsHistory.map(item => {
      delete item.userId;
      delete item.trainingId;

      return item;
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

    const trainingHistory = await this.prisma.trainingHistory.update({
      where: { id },
      data: updateTrainingsHistoryDto,
      include: {
        training: true,
        user: true
      }
    });

    delete trainingHistory.user.password;
    delete trainingHistory.userId;
    delete trainingHistory.trainingId;

    return trainingHistory;
  }
}

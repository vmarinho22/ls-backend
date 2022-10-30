import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from '../../common/errors/types/NotFoundError';
import { CreateTrainingDto } from '../dto/create-training.dto';
import { UpdateTrainingDto } from '../dto/update-training.dto';
import { TrainingEntity } from '../entities/training.entity';

@Injectable()
export class TrainingsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTrainingDto: CreateTrainingDto): Promise<TrainingEntity> {
    return this.prisma.training.create({
      data: createTrainingDto
    });
  }

  async findAll(): Promise<TrainingEntity[]> {
    return this.prisma.training.findMany();
  }

  async findOne(id: number): Promise<TrainingEntity> {
    const training = await this.prisma.training.findUnique({
      where: { id }
    });

    if (!training) {
      throw new NotFoundError(`Treinamento com ID #${id} não encontrado`);
    }

    return training;
  }

  async update(id: number, updateTrainingDto: UpdateTrainingDto): Promise<TrainingEntity> {
    const training = await this.prisma.training.findUnique({
      where: { id }
    });

    if (!training) {
      throw new NotFoundError(`Treinamento com ID #${id} não encontrado`);
    }

    return this.prisma.training.update({
      where: { id },
      data: updateTrainingDto
    });
  }
}

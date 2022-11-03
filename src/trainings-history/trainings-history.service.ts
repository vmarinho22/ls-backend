import { Injectable } from '@nestjs/common';
import { CreateTrainingsHistoryDto } from './dto/create-trainings-history.dto';
import { UpdateTrainingsHistoryDto } from './dto/update-trainings-history.dto';
import { TrainingsHistoryEntity } from './entities/trainings-history.entity';
import { TrainingsHistoryRepository } from './repositories/trainings-history.repository';

@Injectable()
export class TrainingsHistoryService {
  constructor(private readonly repository: TrainingsHistoryRepository) {}

  async create(
    createTrainingsHistoryDto: CreateTrainingsHistoryDto
  ): Promise<TrainingsHistoryEntity> {
    return this.repository.create(createTrainingsHistoryDto);
  }

  async findAll(): Promise<TrainingsHistoryEntity[]> {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<TrainingsHistoryEntity> {
    return this.repository.findOne(id);
  }

  async update(
    id: number,
    updateTrainingsHistoryDto: UpdateTrainingsHistoryDto
  ): Promise<TrainingsHistoryEntity> {
    return this.repository.update(id, updateTrainingsHistoryDto);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { TrainingEntity } from './entities/training.entity';
import { TrainingsRepository } from './repositories/trainings.repository';

@Injectable()
export class TrainingsService {
  constructor(private readonly repository: TrainingsRepository) {}

  async create(createTrainingDto: CreateTrainingDto): Promise<TrainingEntity> {
    return this.repository.create(createTrainingDto);
  }

  async findAll(): Promise<TrainingEntity[]> {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<TrainingEntity> {
    return this.repository.findOne(id);
  }

  async update(id: number, updateTrainingDto: UpdateTrainingDto): Promise<TrainingEntity> {
    return this.repository.update(id, updateTrainingDto);
  }
}

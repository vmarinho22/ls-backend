import { Injectable } from '@nestjs/common';
import { CreateTrainingsHistoryDto } from './dto/create-trainings-history.dto';
import { UpdateTrainingsHistoryDto } from './dto/update-trainings-history.dto';

@Injectable()
export class TrainingsHistoryService {
  create(createTrainingsHistoryDto: CreateTrainingsHistoryDto) {
    return 'This action adds a new trainingsHistory';
  }

  findAll() {
    return `This action returns all trainingsHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingsHistory`;
  }

  update(id: number, updateTrainingsHistoryDto: UpdateTrainingsHistoryDto) {
    return `This action updates a #${id} trainingsHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingsHistory`;
  }
}

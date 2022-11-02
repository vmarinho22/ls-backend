import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingsHistoryService } from './trainings-history.service';
import { CreateTrainingsHistoryDto } from './dto/create-trainings-history.dto';
import { UpdateTrainingsHistoryDto } from './dto/update-trainings-history.dto';

@Controller('trainings-history')
export class TrainingsHistoryController {
  constructor(private readonly trainingsHistoryService: TrainingsHistoryService) {}

  @Post()
  create(@Body() createTrainingsHistoryDto: CreateTrainingsHistoryDto) {
    return this.trainingsHistoryService.create(createTrainingsHistoryDto);
  }

  @Get()
  findAll() {
    return this.trainingsHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingsHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingsHistoryDto: UpdateTrainingsHistoryDto) {
    return this.trainingsHistoryService.update(+id, updateTrainingsHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingsHistoryService.remove(+id);
  }
}

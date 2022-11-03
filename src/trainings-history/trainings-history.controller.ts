import { Body, Controller, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionInterceptor } from 'src/common/interceptors/permission.interceptor';
import { CreateTrainingsHistoryDto } from './dto/create-trainings-history.dto';
import { UpdateTrainingsHistoryDto } from './dto/update-trainings-history.dto';
import { TrainingsHistoryService } from './trainings-history.service';

@ApiTags('Trainings History')
@UseInterceptors(PermissionInterceptor)
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

  @Get('/user/:id')
  findByUser(@Param('id') id: string) {
    return this.trainingsHistoryService.findByUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingsHistoryDto: UpdateTrainingsHistoryDto) {
    return this.trainingsHistoryService.update(+id, updateTrainingsHistoryDto);
  }
}

import { PartialType } from '@nestjs/swagger';
import { CreateTrainingsHistoryDto } from './create-trainings-history.dto';

export class UpdateTrainingsHistoryDto extends PartialType(CreateTrainingsHistoryDto) {}

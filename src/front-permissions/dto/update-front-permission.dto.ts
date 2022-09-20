import { PartialType } from '@nestjs/swagger';
import { CreateFrontPermissionDto } from './create-front-permission.dto';

export class UpdateFrontPermissionDto extends PartialType(CreateFrontPermissionDto) {}

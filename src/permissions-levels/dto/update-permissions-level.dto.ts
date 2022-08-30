import { PartialType } from '@nestjs/swagger';
import { CreatePermissionsLevelDto } from './create-permissions-level.dto';

export class UpdatePermissionsLevelDto extends PartialType(CreatePermissionsLevelDto) {}

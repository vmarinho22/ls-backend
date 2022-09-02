import { Permission } from '@prisma/client';
import { PermissionsLevelEntity } from 'src/permissions-levels/entities/permissions-level.entity';

export class PermissionEntity implements Permission {
  id: number;
  title: string;
  permissionLevel?: PermissionsLevelEntity[];
}

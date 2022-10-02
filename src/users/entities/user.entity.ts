import { User } from '@prisma/client';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';

export class UserEntity implements User {
  id: number;
  username: string;
  email: string;
  password: string;
  isBlocked: boolean;
  permissionId: number;
  permission?: PermissionEntity;
  isSuperAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

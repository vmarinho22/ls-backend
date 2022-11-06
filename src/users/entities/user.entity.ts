import { User } from '@prisma/client';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { ProfileEntity } from './../../profiles/entities/profile.entity';

export class UserEntity implements User {
  id: number;
  username: string;
  email: string;
  password: string;
  isBlocked: boolean;
  permissionId: number;
  permission?: PermissionEntity;
  profile?: ProfileEntity;
  isSuperAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

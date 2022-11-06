import { PermissionLevel } from '@prisma/client';

export class PermissionsLevelEntity implements PermissionLevel {
  id: number;
  page: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
  permissionId: number;
  createdAt: Date;
  updatedAt: Date;
}

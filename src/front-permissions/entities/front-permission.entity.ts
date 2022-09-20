import { FrontPermission } from '@prisma/client';

export class FrontPermissionEntity implements FrontPermission {
  id: number;
  page: string;
  action: string;
  permitted: boolean;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

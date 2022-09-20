import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  username: string;
  email: string;
  password: string;
  isBlocked: boolean;
  permissionId: number;
  isSuperAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

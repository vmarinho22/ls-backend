import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  username: string;
  email: string;
  password: string;
  isBlocked: boolean;
  permissionId: number;
  createdAt: Date;
  updatedAt: Date;
}

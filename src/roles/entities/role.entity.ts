import { Role } from '@prisma/client';

export class RoleEntity implements Role {
  id: number;
  title: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

import { Permission } from '@prisma/client';

export class PermissionEntity implements Permission {
  id: number;
  title: string;
}

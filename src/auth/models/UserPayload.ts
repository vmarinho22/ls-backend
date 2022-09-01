import { PermissionsLevelEntity } from 'src/permissions-levels/entities/permissions-level.entity';

interface Permissions {
  id: string | number;
  title: string;
  permissions: PermissionsLevelEntity[];
}

export interface UserPayload {
  sub: number;
  username: string;
  permissions: Permissions;
  iat?: number;
  exp?: number;
}

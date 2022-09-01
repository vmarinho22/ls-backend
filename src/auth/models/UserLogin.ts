import { PermissionsLevelEntity } from 'src/permissions-levels/entities/permissions-level.entity';
import { UserEntity } from 'src/users/entities/user.entity';

interface Permissions {
  id: string | number;
  title: string;
  permissions: PermissionsLevelEntity[];
}

export interface UserLogin extends UserEntity {
  permissions: Permissions;
}

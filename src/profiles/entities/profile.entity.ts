import { Profile } from '@prisma/client';

export class ProfileEntity implements Profile {
  id: number;
  name: string;
  about: string;
  userPicture: string;
  backgroundPicture: string;
  birthDate: Date;
  naturalness: string;
  roleId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

import { Training } from '@prisma/client';

export class TrainingEntity implements Training {
  id: number;
  name: string;
  description: string | null;
  validity: number;
  createdAt: Date;
  updatedAt: Date;
}

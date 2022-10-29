import { Training } from '@prisma/client';

export class TrainingEntity implements Training {
  id: string;
  name: string;
  description: string | null;
  validity: number;
  createdAt: Date;
  updatedAt: Date;
}

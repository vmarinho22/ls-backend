import { TrainingHistory } from '@prisma/client';

export class TrainingsHistoryEntity implements TrainingHistory {
  id: number;
  userId: number;
  trainingId: number;
  endedIn: Date;
  certificateUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

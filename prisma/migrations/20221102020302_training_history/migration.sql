-- CreateTable
CREATE TABLE "training_history" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "trainingId" INTEGER NOT NULL,
    "endedIn" TIMESTAMP(3) NOT NULL,
    "certificateUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "training_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "training_history" ADD CONSTRAINT "training_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "training_history" ADD CONSTRAINT "training_history_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

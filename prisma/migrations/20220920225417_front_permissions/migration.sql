-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isSuperAdmin" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "front_permission" (
    "id" SERIAL NOT NULL,
    "page" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "permited" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "front_permission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "front_permission" ADD CONSTRAINT "front_permission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

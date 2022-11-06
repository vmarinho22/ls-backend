/*
  Warnings:

  - You are about to drop the column `permissionlId` on the `permission_level` table. All the data in the column will be lost.
  - Added the required column `permissionId` to the `permission_level` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "permission_level" DROP CONSTRAINT "permission_level_permissionlId_fkey";

-- AlterTable
ALTER TABLE "permission_level" DROP COLUMN "permissionlId",
ADD COLUMN     "permissionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "permission_level" ADD CONSTRAINT "permission_level_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

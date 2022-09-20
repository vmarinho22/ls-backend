/*
  Warnings:

  - You are about to drop the column `permited` on the `front_permission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "front_permission" DROP COLUMN "permited",
ADD COLUMN     "permitted" BOOLEAN NOT NULL DEFAULT false;

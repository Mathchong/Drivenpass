/*
  Warnings:

  - A unique constraint covering the columns `[title,userId]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "title" VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cards_title_userId_key" ON "cards"("title", "userId");

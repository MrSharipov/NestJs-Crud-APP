/*
  Warnings:

  - You are about to drop the `portfolio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "portfolio";

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

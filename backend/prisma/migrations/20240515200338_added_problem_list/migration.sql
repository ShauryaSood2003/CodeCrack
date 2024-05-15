-- CreateEnum
CREATE TYPE "TagType" AS ENUM ('Easy', 'Hard', 'Medium');

-- CreateTable
CREATE TABLE "ProblemList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tag" "TagType" NOT NULL,

    CONSTRAINT "ProblemList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "aboutUrl" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "articleText" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

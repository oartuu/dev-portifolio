/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[alias]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Posts_title_key" ON "Posts"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Posts_link_key" ON "Posts"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Posts_alias_key" ON "Posts"("alias");

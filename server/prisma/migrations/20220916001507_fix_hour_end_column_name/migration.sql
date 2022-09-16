/*
  Warnings:

  - You are about to drop the column `HourEnd` on the `Ad` table. All the data in the column will be lost.
  - Added the required column `hourEnd` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
ALTER TABLE Ad
RENAME COLUMN HourEnd TO hourEnd;
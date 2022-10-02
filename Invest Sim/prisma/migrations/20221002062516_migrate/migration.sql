/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[portfolioID1]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountValue` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyingPower` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cash` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `portfolioID1` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt",
ADD COLUMN     "accountValue" INTEGER NOT NULL,
ADD COLUMN     "buyingPower" INTEGER NOT NULL,
ADD COLUMN     "cash" INTEGER NOT NULL,
ADD COLUMN     "portfolioID1" TEXT NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL;

-- DropTable
DROP TABLE "Note";

-- CreateTable
CREATE TABLE "Portfolio" (
    "portfolioID" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BuyOrders" (
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "userId" TEXT,
    "marketOrderPrice" INTEGER,
    "limitOrderMaxPrice" INTEGER,
    "marketOrderQuantity" INTEGER
);

-- CreateTable
CREATE TABLE "SellOrders" (
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "userId" TEXT,
    "marketOrderPrice" INTEGER,
    "limitOrderMaxPrice" INTEGER,
    "marketOrderQuantity" INTEGER
);

-- CreateTable
CREATE TABLE "MarketOrder" (
    "quantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "LimitOrder" (
    "maxPrice" INTEGER NOT NULL,
    "minPrice" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Held" (
    "name" TEXT,
    "quantity" INTEGER,
    "portfolioID" TEXT NOT NULL,

    CONSTRAINT "Held_pkey" PRIMARY KEY ("portfolioID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_portfolioID_key" ON "Portfolio"("portfolioID");

-- CreateIndex
CREATE UNIQUE INDEX "BuyOrders_name_key" ON "BuyOrders"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BuyOrders_quantity_key" ON "BuyOrders"("quantity");

-- CreateIndex
CREATE UNIQUE INDEX "SellOrders_name_key" ON "SellOrders"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SellOrders_quantity_key" ON "SellOrders"("quantity");

-- CreateIndex
CREATE UNIQUE INDEX "MarketOrder_quantity_key" ON "MarketOrder"("quantity");

-- CreateIndex
CREATE UNIQUE INDEX "LimitOrder_maxPrice_key" ON "LimitOrder"("maxPrice");

-- CreateIndex
CREATE UNIQUE INDEX "LimitOrder_minPrice_key" ON "LimitOrder"("minPrice");

-- CreateIndex
CREATE UNIQUE INDEX "LimitOrder_quantity_key" ON "LimitOrder"("quantity");

-- CreateIndex
CREATE UNIQUE INDEX "Held_name_key" ON "Held"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Held_name_portfolioID_key" ON "Held"("name", "portfolioID");

-- CreateIndex
CREATE UNIQUE INDEX "User_portfolioID1_key" ON "User"("portfolioID1");

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_portfolioID_fkey" FOREIGN KEY ("portfolioID") REFERENCES "User"("portfolioID1") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyOrders" ADD CONSTRAINT "BuyOrders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyOrders" ADD CONSTRAINT "BuyOrders_marketOrderQuantity_fkey" FOREIGN KEY ("marketOrderQuantity") REFERENCES "MarketOrder"("quantity") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyOrders" ADD CONSTRAINT "BuyOrders_limitOrderMaxPrice_fkey" FOREIGN KEY ("limitOrderMaxPrice") REFERENCES "LimitOrder"("maxPrice") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellOrders" ADD CONSTRAINT "SellOrders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellOrders" ADD CONSTRAINT "SellOrders_marketOrderQuantity_fkey" FOREIGN KEY ("marketOrderQuantity") REFERENCES "MarketOrder"("quantity") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellOrders" ADD CONSTRAINT "SellOrders_limitOrderMaxPrice_fkey" FOREIGN KEY ("limitOrderMaxPrice") REFERENCES "LimitOrder"("maxPrice") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Held" ADD CONSTRAINT "Held_portfolioID_fkey" FOREIGN KEY ("portfolioID") REFERENCES "Portfolio"("portfolioID") ON DELETE RESTRICT ON UPDATE CASCADE;

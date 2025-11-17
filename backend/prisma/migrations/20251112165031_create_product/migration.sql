-- CreateEnum
CREATE TYPE "Brands" AS ENUM ('GROWTH', 'MAX', 'INTEGRALMEDICA');

-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('AMINOACIDOS', 'CARBOIDRATOS', 'PRETREINO', 'PROTEINAS');

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "brand" "Brands" NOT NULL,
    "category" "Categories" NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

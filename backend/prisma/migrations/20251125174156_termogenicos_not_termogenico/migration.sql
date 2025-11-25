/*
  Warnings:

  - The values [TERMOGENICO] on the enum `Categories` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Categories_new" AS ENUM ('AMINOACIDOS', 'CARBOIDRATOS', 'PRETREINO', 'PROTEINAS', 'ACESSORIOS', 'OUTLET', 'VITAMINAS', 'TERMOGENICOS');
ALTER TABLE "products" ALTER COLUMN "category" TYPE "Categories_new" USING ("category"::text::"Categories_new");
ALTER TYPE "Categories" RENAME TO "Categories_old";
ALTER TYPE "Categories_new" RENAME TO "Categories";
DROP TYPE "public"."Categories_old";
COMMIT;

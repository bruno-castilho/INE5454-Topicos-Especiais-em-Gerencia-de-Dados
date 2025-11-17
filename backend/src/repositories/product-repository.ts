import { prisma } from '@/lib/prisma'
import { Prisma, Brands, Categories } from '@prisma/client'

export class ProductRepository {
  async createMany(products: Prisma.ProductCreateInput[]) {
    await prisma.product.createMany({
      data: products,
    })
  }

  async searchManyByCategory(params: {
    category: Categories
    brands: Brands[]
    page: number
  }) {
    const { brands, category, page } = params

    const products = await prisma.product.findMany({
      where: {
        category,
        brand: { in: brands },
      },
      take: 10,
      skip: (page - 1) * 10,
    })

    return products
  }
}

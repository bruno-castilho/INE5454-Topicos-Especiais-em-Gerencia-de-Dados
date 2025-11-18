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

    const pageSize = 10

    const [total, products] = await Promise.all([
      prisma.product.count({
        where: {
          category,
          brand: { in: brands },
        },
      }),

      prisma.product.findMany({
        where: {
          category,
          brand: { in: brands },
        },
        take: pageSize,
        skip: (page - 1) * pageSize,
      }),
    ])

    const pages = Math.ceil(total / pageSize)

    return { products, pages }
  }
}

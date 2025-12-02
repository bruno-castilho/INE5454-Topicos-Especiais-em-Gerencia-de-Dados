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

  async avaragePricesByBrands(params: { brands: Brands[] }) {
    const { brands } = params

    const results = await prisma.product.groupBy({
      by: ['category', 'brand'],
      where: {
        brand: {
          in: brands,
        },
      },
      _avg: {
        price: true,
      },
    })

    const averagePrices = results.reduce(
      (acc, row) => {
        if (!acc[row.brand]) acc[row.brand] = {}

        acc[row.brand][row.category] = Number(row._avg.price!.toFixed(2))
        return acc
      },
      {} as Record<string, Record<string, number>>,
    )

    return {
      averagePrices,
    }
  }

  async medianPricesByBrands(params: { brands: Brands[] }) {
    const { brands } = params

    const results = await prisma.$queryRaw`
      SELECT
        category,
        brand,
        percentile_cont(0.5) WITHIN GROUP (ORDER BY price) AS median
      FROM products
      WHERE brand = ANY(${brands}::"Brands"[])
      GROUP BY category, brand;
    `

    const medianPrices = results.reduce(
      (acc, row) => {
        if (!acc[row.brand]) acc[row.brand] = {}

        acc[row.brand][row.category] = Number(row.median!.toFixed(2))
        return acc
      },
      {} as Record<string, Record<string, number>>,
    )

    return {
      medianPrices,
    }
  }

  async modePricesByBrands(params: { brands: Brands[] }) {
    const { brands } = params

    const results = await prisma.$queryRaw`
      SELECT DISTINCT ON (category, brand)
        category,
        brand,
        price AS mode
      FROM (
        SELECT
          category,
          brand,
          price,
          COUNT(*) AS freq
        FROM products
        WHERE brand = ANY(${brands}::"Brands"[])
        GROUP BY category, brand, price
      ) AS grouped
      ORDER BY category, brand, freq DESC, price ASC;
    `

    const modePrices = results.reduce(
      (acc, row) => {
        if (!acc[row.brand]) acc[row.brand] = {}
        acc[row.brand][row.category] = Number(row.mode.toFixed(2))
        return acc
      },
      {} as Record<string, Record<string, number>>,
    )

    return {
      modePrices,
    }
  }

  async standardDeviationPricesByBrands(params: { brands: Brands[] }) {
    const { brands } = params

    const results = await prisma.$queryRaw`
      SELECT
        category,
        brand,
        stddev_samp(price) AS stddev
      FROM products
      WHERE brand = ANY(${brands}::"Brands"[])
      GROUP BY category, brand;
    `

    const standardDeviationPrices = results.reduce(
      (acc, row) => {
        if (!acc[row.brand]) acc[row.brand] = {}

        acc[row.brand][row.category] = Number(row.stddev?.toFixed(2) ?? 0)
        return acc
      },
      {} as Record<string, Record<string, number>>,
    )

    return {
      standardDeviationPrices,
    }
  }

  async minPricesByBrands(params: { brands: Brands[] }) {
    const { brands } = params

    const results = await prisma.product.groupBy({
      by: ['category', 'brand'],
      where: {
        brand: {
          in: brands,
        },
      },
      _min: {
        price: true,
      },
    })

    const minPrices = results.reduce(
      (acc, row) => {
        if (!acc[row.brand]) acc[row.brand] = {}

        acc[row.brand][row.category] = Number(row._min.price!.toFixed(2))
        return acc
      },
      {} as Record<string, Record<string, number>>,
    )

    return {
      minPrices,
    }
  }

  async maxPricesByBrands(params: { brands: Brands[] }) {
    const { brands } = params

    const results = await prisma.product.groupBy({
      by: ['category', 'brand'],
      where: {
        brand: {
          in: brands,
        },
      },
      _max: {
        price: true,
      },
    })

    const maxPrices = results.reduce(
      (acc, row) => {
        if (!acc[row.brand]) acc[row.brand] = {}

        acc[row.brand][row.category] = Number(row._max.price!.toFixed(2))
        return acc
      },
      {} as Record<string, Record<string, number>>,
    )

    return {
      maxPrices,
    }
  }
}

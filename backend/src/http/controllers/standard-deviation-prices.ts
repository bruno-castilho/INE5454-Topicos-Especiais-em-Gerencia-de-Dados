import { ProductRepository } from '@/repositories/product-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function standarddeviationPrices(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const standarddeviationPricesQuerySchema = z.object({
    brands: z.preprocess(
      (value) => {
        if (typeof value === 'string') {
          return value.split(',').map((v) => v.toUpperCase())
        }

        return undefined
      },
      z
        .array(z.enum(['GROWTH', 'INTEGRALMEDICA', 'MAX']))
        .default(['GROWTH', 'INTEGRALMEDICA', 'MAX']),
    ),
  })

  const { brands } = standarddeviationPricesQuerySchema.parse(request.query)

  const productRepository = new ProductRepository()

  const { standardDeviationPrices } =
    await productRepository.standardDeviationPricesByBrands({
      brands,
    })

  return reply.status(200).send({
    standardDeviationPrices,
  })
}

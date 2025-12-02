import { ProductRepository } from '@/repositories/product-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function modePrices(request: FastifyRequest, reply: FastifyReply) {
  const modePricesQuerySchema = z.object({
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

  const { brands } = modePricesQuerySchema.parse(request.query)

  const productRepository = new ProductRepository()

  const { modePrices } = await productRepository.modePricesByBrands({
    brands,
  })

  return reply.status(200).send({
    modePrices,
  })
}

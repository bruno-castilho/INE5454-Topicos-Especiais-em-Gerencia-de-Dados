import { ProductRepository } from '@/repositories/product-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findOutlet(request: FastifyRequest, reply: FastifyReply) {
  const findOutletQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
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

  const { page, brands } = findOutletQuerySchema.parse(request.query)

  const productRepository = new ProductRepository()

  const { products, pages } = await productRepository.searchManyByCategory({
    page,
    brands,
    category: 'OUTLET',
  })

  return reply.status(200).send({
    products,
    pages,
  })
}

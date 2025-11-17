import { ProductRepository } from '@/repositories/product-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findPretreino(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findPretreinoQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    brands: z
      .array(z.enum(['GROWTH', 'INTEGRALMEDICA', 'MAX']))
      .default(['GROWTH', 'INTEGRALMEDICA', 'MAX']),
  })

  const { page, brands } = findPretreinoQuerySchema.parse(request.query)

  const productRepository = new ProductRepository()

  const products = await productRepository.searchManyByCategory({
    page,
    brands,
    category: 'PRETREINO',
  })

  return reply.status(200).send({
    products,
  })
}

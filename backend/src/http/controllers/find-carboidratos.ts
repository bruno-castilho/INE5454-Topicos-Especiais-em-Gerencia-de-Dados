import { ProductRepository } from '@/repositories/product-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findCarboidratos(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findCarboidratosQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    brands: z
      .array(z.enum(['GROWTH', 'INTEGRALMEDICA', 'MAX']))
      .default(['GROWTH', 'INTEGRALMEDICA', 'MAX']),
  })

  const { page, brands } = findCarboidratosQuerySchema.parse(request.query)

  const productRepository = new ProductRepository()

  const products = await productRepository.searchManyByCategory({
    page,
    brands,
    category: 'CARBOIDRATOS',
  })

  return reply.status(200).send({
    products,
  })
}

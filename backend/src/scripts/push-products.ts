import { ProductRepository } from '@/repositories/product-repository'
import { Prisma } from '@prisma/client'
import products from 'produtos.json'

const prismaProducts: Prisma.ProductCreateInput[] = products.map((product) => {
  const priceString = product.PRECO_PIX
    ? product.PRECO_PIX.replace(/[^0-9,]+/g, '')
    : product.PRECO_PRINCIPAL
      ? product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')
      : '0'

  const price = parseFloat(priceString.replace(',', '.'))

  return {
    title: product.TITULO,
    link: product.LINK,
    imageUrl: product.FIGURA,
    brand: product.MARCA as 'GROWTH' | 'MAX' | 'INTEGRALMEDICA',
    category: product.CATEGORIA as
      | 'AMINOACIDOS'
      | 'CARBOIDRATOS'
      | 'PRETREINO'
      | 'PROTEINAS'
      | 'ACESSORIOS'
      | 'OUTLET'
      | 'VITAMINAS'
      | 'TERMOGENICOS',
    price,
  }
})

async function main() {
  const productRepository = new ProductRepository()

  await productRepository.createMany(prismaProducts)
}

main()
  .then(() =>
    console.log('Produtos inseridos no banco de dados com sucesso 🚀'),
  )
  .catch((error) => console.error(error))

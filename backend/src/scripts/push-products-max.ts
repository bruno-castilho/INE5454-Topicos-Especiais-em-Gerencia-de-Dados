import { Prisma } from '@prisma/client'
import maxAminoacidos from '../../../max/aminoacidos/produtos.json'
import maxCarboidratos from '../../../max/carboidratos/produtos.json'
import maxPreTreino from '../../../max/pre-treino/produtos.json'
import maxProteinas from '../../../max/proteinas/produtos.json'
import { ProductRepository } from '@/repositories/product-repository'

const prismaMaxAminoacidos: Prisma.ProductCreateInput[] = maxAminoacidos.map(
  (product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'MAX',
      category: 'AMINOACIDOS',
      price,
    }
  },
)

const prismaMaxCarboidratos: Prisma.ProductCreateInput[] = maxCarboidratos.map(
  (product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'MAX',
      category: 'CARBOIDRATOS',
      price,
    }
  },
)

const prismaMaxPreTreino: Prisma.ProductCreateInput[] = maxPreTreino.map(
  (product) => {
    const priceString = product.PRECO_PIX
      ? product.PRECO_PIX.replace(/[^0-9,]+/g, '')
      : '0'

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'MAX',
      category: 'PRETREINO',
      price,
    }
  },
)

const prismaMaxProteinas: Prisma.ProductCreateInput[] = maxProteinas.map(
  (product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'MAX',
      category: 'PROTEINAS',
      price,
    }
  },
)

async function main() {
  const productRepository = new ProductRepository()

  await Promise.all([
    productRepository.createMany(prismaMaxAminoacidos),
    productRepository.createMany(prismaMaxCarboidratos),
    productRepository.createMany(prismaMaxPreTreino),
    productRepository.createMany(prismaMaxProteinas),
  ])
}

main()
  .then(() =>
    console.log('Produtos da Max inseridos no banco de dados com sucesso 🚀'),
  )
  .catch((error) => console.error(error))

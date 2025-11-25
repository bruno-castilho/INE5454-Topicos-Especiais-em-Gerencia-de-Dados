import { Prisma } from '@prisma/client'
import growthAminoacidos from '../../../growth/aminoacidos/produtos.json'
import growthCarboidratos from '../../../growth/carboidratos/produtos.json'
import growthPreTreino from '../../../growth/pre-treino/produtos.json'
import growthProteinas from '../../../growth/proteinas/produtos.json'

import growthAcessorios from '../../../growth/acessorios/produtos.json'
import growthOutlet from '../../../growth/outlet/produtos.json'
import growthVitaminas from '../../../growth/vitaminas/produtos.json'
import growthTermogenico from '../../../growth/termogenico/produtos.json'

import { ProductRepository } from '@/repositories/product-repository'

const prismaGrowthAminoacidos: Prisma.ProductCreateInput[] =
  growthAminoacidos.map((product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'GROWTH',
      category: 'AMINOACIDOS',
      price,
    }
  })

const prismaGrowthCarboidratos: Prisma.ProductCreateInput[] =
  growthCarboidratos.map((product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'GROWTH',
      category: 'CARBOIDRATOS',
      price,
    }
  })

const prismaGrowthPreTreino: Prisma.ProductCreateInput[] = growthPreTreino.map(
  (product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'GROWTH',
      category: 'PRETREINO',
      price,
    }
  },
)

const prismaGrowthProteinas: Prisma.ProductCreateInput[] = growthProteinas.map(
  (product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'GROWTH',
      category: 'PROTEINAS',
      price,
    }
  },
)

const prismaGrowthAcessorios: Prisma.ProductCreateInput[] =
  growthAcessorios.map((product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'GROWTH',
      category: 'ACESSORIOS',
      price,
    }
  })

const prismaGrowthOutlet: Prisma.ProductCreateInput[] = growthOutlet.map(
  (product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'GROWTH',
      category: 'OUTLET',
      price,
    }
  },
)

const prismaGrowthVitaminas: Prisma.ProductCreateInput[] = growthVitaminas.map(
  (product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'GROWTH',
      category: 'VITAMINAS',
      price,
    }
  },
)

const prismaGrowthTermogenico: Prisma.ProductCreateInput[] =
  growthTermogenico.map((product) => {
    const priceString = product.PRECO_PIX.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'GROWTH',
      category: 'TERMOGENICOS',
      price,
    }
  })

async function main() {
  const productRepository = new ProductRepository()

  await Promise.all([
    productRepository.createMany(prismaGrowthAminoacidos),
    productRepository.createMany(prismaGrowthCarboidratos),
    productRepository.createMany(prismaGrowthPreTreino),
    productRepository.createMany(prismaGrowthProteinas),
    productRepository.createMany(prismaGrowthAcessorios),
    productRepository.createMany(prismaGrowthOutlet),
    productRepository.createMany(prismaGrowthTermogenico),
    productRepository.createMany(prismaGrowthVitaminas),
  ])
}

main()
  .then(() =>
    console.log(
      'Produtos da Growth inseridos no banco de dados com sucesso 🚀',
    ),
  )
  .catch((error) => console.error(error))

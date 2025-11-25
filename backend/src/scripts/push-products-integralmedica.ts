import { Prisma } from '@prisma/client'
import integralmedicaAminoacidos from '../../../integralmedica/aminoacidos/produtos.json'
import integralmedicaCarboidratos from '../../../integralmedica/carboidratos/produtos.json'
import integralmedicaPreTreino from '../../../integralmedica/pre-treino/produtos.json'
import integralmedicaProteinas from '../../../integralmedica/proteinas/produtos.json'
import { ProductRepository } from '@/repositories/product-repository'

import integralmedicaAcessorios from '../../../integralmedica/acessorios/produtos.json'
import integralmedicaOutlet from '../../../integralmedica/outlet/produtos.json'
import integralmedicaVitaminas from '../../../integralmedica/vitaminas/produtos.json'
import integralmedicaTermogenico from '../../../integralmedica/termogenico/produtos.json'

const prismaIntegralmedicaAminoacidos: Prisma.ProductCreateInput[] =
  integralmedicaAminoacidos.map((product) => {
    const priceString = product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'INTEGRALMEDICA',
      category: 'AMINOACIDOS',
      price,
    }
  })

const prismaIntegralmedicaCarboidratos: Prisma.ProductCreateInput[] =
  integralmedicaCarboidratos.map((product) => {
    const priceString = product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'INTEGRALMEDICA',
      category: 'CARBOIDRATOS',
      price,
    }
  })

const prismaIntegralmedicaPreTreino: Prisma.ProductCreateInput[] =
  integralmedicaPreTreino.map((product) => {
    const priceString = product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'INTEGRALMEDICA',
      category: 'PRETREINO',
      price,
    }
  })

const prismaIntegralmedicaProteinas: Prisma.ProductCreateInput[] =
  integralmedicaProteinas.map((product) => {
    const priceString = product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'INTEGRALMEDICA',
      category: 'PROTEINAS',
      price,
    }
  })

const prismaIntegralmedicaAcessorios: Prisma.ProductCreateInput[] =
  integralmedicaAcessorios.map((product) => {
    const priceString = product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'INTEGRALMEDICA',
      category: 'ACESSORIOS',
      price,
    }
  })

const prismaIntegralmedicaOutlet: Prisma.ProductCreateInput[] =
  integralmedicaOutlet.map((product) => {
    const priceString = product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'INTEGRALMEDICA',
      category: 'OUTLET',
      price,
    }
  })

const prismaIntegralmedicaVitaminas: Prisma.ProductCreateInput[] =
  integralmedicaVitaminas.map((product) => {
    const priceString = product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'INTEGRALMEDICA',
      category: 'VITAMINAS',
      price,
    }
  })

const prismaIntegralmedicaTermogenico: Prisma.ProductCreateInput[] =
  integralmedicaTermogenico.map((product) => {
    const priceString = product.PRECO_PRINCIPAL.replace(/[^0-9,]+/g, '')

    const price = parseFloat(priceString.replace(',', '.'))

    return {
      title: product.TITULO,
      link: product.LINK,
      imageUrl: product.FIGURA,
      brand: 'INTEGRALMEDICA',
      category: 'TERMOGENICOS',
      price,
    }
  })

async function main() {
  const productRepository = new ProductRepository()

  await Promise.all([
    productRepository.createMany(prismaIntegralmedicaAminoacidos),
    productRepository.createMany(prismaIntegralmedicaCarboidratos),
    productRepository.createMany(prismaIntegralmedicaPreTreino),
    productRepository.createMany(prismaIntegralmedicaProteinas),

    productRepository.createMany(prismaIntegralmedicaAcessorios),
    productRepository.createMany(prismaIntegralmedicaTermogenico),
    productRepository.createMany(prismaIntegralmedicaVitaminas),
    productRepository.createMany(prismaIntegralmedicaOutlet),
  ])
}

main()
  .then(() =>
    console.log(
      'Produtos da Integralmedica inseridos no banco de dados com sucesso 🚀',
    ),
  )
  .catch((error) => console.error(error))

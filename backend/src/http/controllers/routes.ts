import { FastifyInstance } from 'fastify'
import { findAminoacidos } from './find-aminoacidos'
import { findPretreino } from './find-pretreino'
import { findCarboidratos } from './find-carboidratos'
import { findProteinas } from './find-proteinas'

export async function routes(app: FastifyInstance) {
  app.get('/aminoacidos', findAminoacidos)
  app.get('/pretreino', findPretreino)
  app.get('/carboidratos', findCarboidratos)
  app.get('/proteinas', findProteinas)
}

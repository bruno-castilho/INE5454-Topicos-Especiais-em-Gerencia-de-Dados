import { FastifyInstance } from 'fastify'

import { avaragePrices } from './controllers/average-prices'
import { findAminoacidos } from './controllers/find-aminoacidos'
import { findPretreino } from './controllers/find-pretreino'
import { findCarboidratos } from './controllers/find-carboidratos'
import { findProteinas } from './controllers/find-proteinas'
import { findAcessorios } from './controllers/find-acessorios'
import { findOutlet } from './controllers/find-outlet'
import { findVitaminas } from './controllers/find-vitaminas'
import { findTermogenicos } from './controllers/find-termogenicos'
import { medianPrices } from './controllers/median-prices'
import { minPrices } from './controllers/min-prices'
import { maxPrices } from './controllers/max-prices'
import { modePrices } from './controllers/mode-prices'
import { standarddeviationPrices } from './controllers/standard-deviation-prices'

export async function routes(app: FastifyInstance) {
  app.get('/aminoacidos', findAminoacidos)
  app.get('/pretreino', findPretreino)
  app.get('/carboidratos', findCarboidratos)
  app.get('/proteinas', findProteinas)
  app.get('/acessorios', findAcessorios)
  app.get('/outlet', findOutlet)
  app.get('/vitaminas', findVitaminas)
  app.get('/termogenicos', findTermogenicos)
  app.get('/avarageprices', avaragePrices)
  app.get('/medianprices', medianPrices)
  app.get('/modeprices', modePrices)
  app.get('/standarddeviationprices', standarddeviationPrices)
  app.get('/minprices', minPrices)
  app.get('/maxprices', maxPrices)
}

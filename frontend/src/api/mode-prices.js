import { api } from '../lib/axios'

export async function modePrices(params) {
  const { brands } = params
  const response = await api.get('/modeprices', {
    params: {
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

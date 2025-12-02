import { api } from '../lib/axios'

export async function maxPrices(params) {
  const { brands } = params
  const response = await api.get('/maxprices', {
    params: {
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

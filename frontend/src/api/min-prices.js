import { api } from '../lib/axios'

export async function minPrices(params) {
  const { brands } = params
  const response = await api.get('/minprices', {
    params: {
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

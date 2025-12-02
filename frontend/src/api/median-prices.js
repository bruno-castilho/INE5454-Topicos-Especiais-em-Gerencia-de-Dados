import { api } from '../lib/axios'

export async function medianPrices(params) {
  const { brands } = params
  const response = await api.get('/medianprices', {
    params: {
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

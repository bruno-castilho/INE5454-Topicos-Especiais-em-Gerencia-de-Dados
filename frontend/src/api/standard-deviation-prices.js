import { api } from '../lib/axios'

export async function standardDeviationPrices(params) {
  const { brands } = params
  const response = await api.get('/standarddeviationprices', {
    params: {
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

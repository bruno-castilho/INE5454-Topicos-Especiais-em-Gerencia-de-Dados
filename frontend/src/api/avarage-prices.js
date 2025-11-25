import { api } from '../lib/axios'

export async function avaragePrices(params) {
  const { brands } = params
  const response = await api.get('/avarageprices', {
    params: {
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

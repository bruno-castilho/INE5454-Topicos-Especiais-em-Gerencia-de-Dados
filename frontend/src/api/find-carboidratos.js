import { api } from '../lib/axios'

export async function findCarboidratos(params) {
  const { page, brands } = params
  const response = await api.get('/carboidratos', {
    params: {
      page,
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

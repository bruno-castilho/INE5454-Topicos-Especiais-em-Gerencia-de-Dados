import { api } from '../lib/axios'

export async function findProteinas(params) {
  const { page, brands } = params
  const response = await api.get('/proteinas', {
    params: {
      page,
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

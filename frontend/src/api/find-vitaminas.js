import { api } from '../lib/axios'

export async function findVitaminas(params) {
  const { page, brands } = params
  const response = await api.get('/vitaminas', {
    params: {
      page,
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

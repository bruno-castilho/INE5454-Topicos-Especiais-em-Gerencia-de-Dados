import { api } from '../lib/axios'

export async function findOutlet(params) {
  const { page, brands } = params
  const response = await api.get('/outlet', {
    params: {
      page,
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

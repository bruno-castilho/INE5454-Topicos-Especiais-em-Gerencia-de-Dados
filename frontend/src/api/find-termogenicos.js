import { api } from '../lib/axios'

export async function findTermogenicos(params) {
  const { page, brands } = params
  const response = await api.get('/termogenicos', {
    params: {
      page,
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

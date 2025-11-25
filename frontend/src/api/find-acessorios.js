import { api } from '../lib/axios'

export async function findAcessorios(params) {
  const { page, brands } = params
  const response = await api.get('/acessorios', {
    params: {
      page,
      brands: brands ? brands.join(',') : undefined,
    },
  })

  return response.data
}

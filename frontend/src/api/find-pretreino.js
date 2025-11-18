import {api} from '../lib/axios'

export  async function findPretreino(params) {
    const { page, brands } = params
    const response = await api.get('/pretreino', {
        params: {
            page,
            brands: brands ? brands.join(',') : undefined
        }
    })

    return response.data
}

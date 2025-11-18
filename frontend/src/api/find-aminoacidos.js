import {api} from '../lib/axios'

export  async function findAminoacidos(params) {
    const { page, brands } = params
    const response = await api.get('/aminoacidos', {
        params: {
            page,
            brands: brands ? brands.join(',') : undefined
        }
    })

    return response.data
}

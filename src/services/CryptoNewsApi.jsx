import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const CryptoNewsApi = createApi({
    reducerPath : 'CryptoNewsApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://bing-news-search1.p.rapidapi.com',
        prepareHeaders : (headers) => {headers.set('X-RapidAPI-Key','acfd9a9f84msh0b9ed303ae382d4p1cad42jsn9b64b7424a80'); return headers}
    }),
    endpoints : (builder) => ({
        getCryptoNews : builder.query({query : ()=> '/news/search'})
    })
})
export const {useGetCryptoNewsQuery } = CryptoNewsApi
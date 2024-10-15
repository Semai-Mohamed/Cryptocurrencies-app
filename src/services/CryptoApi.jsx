import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

  export const CryptoApi = createApi({
    reducerPath : 'CryptoApi',
    baseQuery : fetchBaseQuery({
      baseUrl:'https://coinranking1.p.rapidapi.com',
      prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key','acfd9a9f84msh0b9ed303ae382d4p1cad42jsn9b64b7424a80')
        return headers
      }
     
    }),
    endpoints :(builder) => ({
      getCryptoExchanges : builder.query({query :(count) =>`/coins?limit=${count}`})
    })

  })
export const {useGetCryptoExchangesQuery} = CryptoApi
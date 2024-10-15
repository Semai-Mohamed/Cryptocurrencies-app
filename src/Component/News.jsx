/* eslint-disable no-unused-vars */
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi'

const News = () => {
  const {data,isfetching,error} = useGetCryptoNewsQuery()
  if(isfetching){
    return <div>loading</div>
  }
  if(error){
    return <div>error</div>
  }
  console.log(data)
  return (
    <div>News</div>
  )
}

export default News
/* eslint-disable no-unused-vars */
import React from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Typography,Row , Col,Statistic} from 'antd'
import { useGetCryptoExchangesQuery } from '../services/CryptoApi'
import { Title } from 'chart.js'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const Homepage = () => {
    const { data, isFetching, error } = useGetCryptoExchangesQuery(10);
    const globalstate = data?.data?.stats
  return (
    <div className='pl-2 pt-3 '>
        <Typography.Title level={2}>Global crypto state </Typography.Title>
        <Row className='ml-4'>
        <Col span={12}><Statistic title='Total Ctyptocurrencies' value={globalstate?.total}></Statistic></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalstate?.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalstate?.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalstate?.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalstate?.totalMarkets)}></Statistic></Col>
        </Row>
       <div className='w-full flex items-center justify-center '>
       <div className='flex justify-between my-10 w-full md:flex-row flex-col items-center'>
        <div  className='font-bold text-3xl pl-3' >Top 10 Cryptocurrencies in the world</div>
        <div   className='text-xl font-bold text-blue-700 cursor-pointer mr-3'><Link to={'/cryptocurrencies'}>Show More</Link></div>
        </div>
       </div>
       <Cryptocurrencies simplified></Cryptocurrencies>
       <div className='w-full flex items-center justify-center '>
       <div className='flex justify-between my-10 w-full md:flex-row flex-col items-center'>
        <div  className='font-bold text-lg' >Latest Crypto News</div>
        <div   className='text-lg font-bold text-blue-700 cursor-pointer mr-3' ><Link to={'/cryptocurrencies'}>Show More</Link></div>
        </div>
       </div>
       <News></News>
    </div>
  )
}

export default Homepage
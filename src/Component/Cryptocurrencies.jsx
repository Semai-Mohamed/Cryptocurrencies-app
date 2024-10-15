/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useGetCryptoExchangesQuery } from '../services/CryptoApi';

// eslint-disable-next-line react/prop-types
const Cryptocurrencies = ({simplified}) => {
  const count = simplified ?10 : 100
  const { data, isFetching } = useGetCryptoExchangesQuery(count);
  // Using optional chaining to access nested data safely
  const [cryptos ,setcryptos] = useState(data?.data?.coins || [])
  const [serch, setserch] = useState('')
useEffect(()=>{
const filterdata = data?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(serch.toLowerCase()))
setcryptos(filterdata)



},[setserch,serch,data])
  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-wrap gap-5 pl-2'>
      {!simplified && (<div className='w-full text-center'>
        <input type="text" placeholder='search Cryptocurrency' className='rounded-lg h-10 w-96 m-4 ' onChange={(e)=>{setserch(e.target.value)}} />
      </div>) }
      {cryptos?.map((currency) => (
       <div key={currency?.uuid} className='w-56 flex justify-center  items-center bg-white'>
         <div  className='  flex flex-col gap-7 my-5 w-4/5 '>
          <div className='h-14 flex justify-between items-center border-b-2 border-gray-200 border-solid box-border'>
            <div className='font-bold'>{currency.rank}. {currency.name}</div>
            <img className='h-8' src={currency.iconUrl} alt="" />
          </div>
          <div className='text-sm flex flex-col gap-3'>
            <div>Price: {currency.price}</div>
            <div>Market cap: {currency.marketCap}</div>
            <div>Daily change: {currency.change}</div>
          </div>
        </div>
       </div>
      ))}
    </div>
  );
};

export default Cryptocurrencies;

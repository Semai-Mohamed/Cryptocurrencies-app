/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import {MenuOutlined,BulbOutlined,MoneyCollectOutlined,FundOutlined,HomeOutlined} from '@ant-design/icons'
import {Button,Menu,Avatar,Typography} from 'antd'
import {Link} from 'react-router-dom'
import './../App.css'

 
const Navbar = () => {
  return (
    <div>
       <div className=' fixed top-0 left-0 justify-center items-center flex flex-col' >
       <Menu theme='dark' style={{height : '755px', width:'200px' }}>
      <div className='flex justify-center items-center'>
      <Avatar style={{margin : '10px'}} src='https://i.ibb.co/Z11pcGG/cryptocurrency.png' size={'large'}  ></Avatar>
        <Typography.Title level={4}>
            <Link to={'/'}>Cryptoverse</Link>
        </Typography.Title>
      </div>
     
     
<Menu.Item icon={<HomeOutlined></HomeOutlined>}>
    <Link to={'/'}>Home</Link>
</Menu.Item>
<Menu.Item icon={<FundOutlined></FundOutlined>}>
    <Link to={'/cryptocurrencies'}>Cryptocurrencies</Link>
</Menu.Item>
<Menu.Item icon={<MoneyCollectOutlined></MoneyCollectOutlined>}>
    <Link to={'/exchanges'}>Exchanges</Link>
</Menu.Item>
<Menu.Item icon={<BulbOutlined></BulbOutlined>}>
    <Link to={'/news'}>News</Link>
</Menu.Item>
      </Menu>

       </div>
      
    </div>
  )
}

export default Navbar

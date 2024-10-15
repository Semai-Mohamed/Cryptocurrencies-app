/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import {Layout,Menu,Space} from 'antd'
import { Homepage ,Navbar , Cryptocurrencies,Exchanges,News,CryptoDeatils } from './Component'
import {Routes , Route,Link} from 'react-router-dom'
function App() {

  return (
    
      <div className='float-right  ' style={{width:'calc(100% - 200px)'}}>
        <Navbar></Navbar>
         <Layout>
          <div className=''>
            <Routes>
              <Route path='/' element = {<Homepage></Homepage>}></Route>
              <Route path='/exchanges' element = {<Exchanges></Exchanges>}></Route>
              <Route path='/cryptocurrencies' element = {<Cryptocurrencies></Cryptocurrencies>}></Route>
              <Route path='/crypto/:coinId' element = {<CryptoDeatils></CryptoDeatils>}></Route>
              <Route path='/news' element = {<News></News>}></Route>

            </Routes>
          </div>
         </Layout>
         <div className='w-full justify-center items-center gap-3 flex-col text-white '>
        
       <Menu theme='dark' style={{width:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column', gap:"30px"}}>
          
         
    
       <div className='text-center'>Crypto verse</div>
       <div className='text-center'>All right reserved</div>
       <div className='text-xs text-center text-blue-600' style={{wordSpacing:'20px'}}>
<Link to={'/'}> Home</Link> <Link to={'/Exchanges'}>Exchanges</Link> <Link to={'/News'}>News</Link>
          </div>
          </Menu>
         </div>
      </div>
    
  )
}

export default App

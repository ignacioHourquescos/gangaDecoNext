import '../styles/globals.css'
import {useState} from 'react'
import Layout from '../components/layout/layout'
import Footer           from '../components/Footer/Footer'
import Wpp              from '../components/wpp/wpp';
import Header           from '../components/Header/Header';
import { AppWrapper }   from '../context/AppContext';
import Cart             from '../components/Cart/Cart'


function MyApp({ Component, pageProps }) {
    

  return (
   
       <Layout>  
       
             <Header/>
            <AppWrapper>
             <Cart/>
            <Component {...pageProps} />
            
            <Wpp  number="5411 35884485" message={"hello "} />
            </AppWrapper>
            <Footer/>
    </Layout>
 
  )
}

export default MyApp


const styles = {
    button:{
    height: '200px',
    width:'20px',
    border: '1px solid green'
    }
}
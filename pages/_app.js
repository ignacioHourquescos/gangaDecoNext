import '../styles/globals.css'
import {useState} from 'react'
import Layout from '../components/layout/layout'
import Footer from '../components/Footer/Footer'
import Wpp from '../components/wpp/wpp';
import Header from '../components/Header/Header';
import { AppWrapper } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
    
    const [pedido, setPedido]=useState("1 x botella pet%0a2 x Bowl amarillo %0a1 x vasos 300ml");

  return (
   
       <Layout>  
             <Header/>
            <AppWrapper>
            <Component {...pageProps} />
            </AppWrapper>
            <Wpp  number="5411 65106333" message={pedido} />
            
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
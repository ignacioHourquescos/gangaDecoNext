import '../styles/globals.css'
import {useState} from 'react'
import Layout from '../components/layout/layout'
import BurgerMenu from '../components/layout/BurgerMenu'
import Footer from '../components/Footer/Footer'
import Wpp from '../components/wpp/wpp';
import { getRenderPropValue } from 'antd/lib/_util/getRenderPropValue';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {

    const [pedido, setPedido]=useState("1 x botella pet%0a2 x Bowl amarillo %0a1 x vasos 300ml");

  return (
      <Layout>  
            <Header/>
            <Component {...pageProps} />
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
import '../styles/globals.css'
import Layout from '../components/layout/layout'
import BurgerMenu from '../components/layout/BurgerMenu'
import Footer from '../components/Footer/Footer'
import ReactWhatsapp from 'react-whatsapp';
import { getRenderPropValue } from 'antd/lib/_util/getRenderPropValue';

function MyApp({ Component, pageProps }) {

  return (
      <Layout>

            <Component {...pageProps} />
            <ReactWhatsapp className={styles.button} number="1-212-736-5000" message="Hello World!!!" />
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
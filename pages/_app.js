import '../styles/globals.css'
import Layout from '../components/layout/layout'
import BurgerMenu from '../components/layout/BurgerMenu'
import Footer from '../components/Footer/Footer'


function MyApp({ Component, pageProps }) {

  return (
      <Layout>

            <Component {...pageProps} />
            <Footer/>
    </Layout>
  )
}

export default MyApp

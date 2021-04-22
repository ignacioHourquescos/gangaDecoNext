
import ProductList      from '../components/product/ProductList'
import Head             from '../components/Header/Header'
import Carrousel        from '../components/Carrousel/Carrousel'
import GangaCarrousel   from '../components/GangaCarrousel/GangaCarrousel'



const HomePage = () => {


   

    return (<>
            <GangaCarrousel/>
            <Carrousel/>
            <ProductList/>
        </>
    )

}

export default HomePage
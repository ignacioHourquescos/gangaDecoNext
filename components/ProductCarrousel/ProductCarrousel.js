
import {useState, useEffect} from 'react'
import './ProductCarrousel.module.scss'
import {getProducts} from '../../backend/Sheets';
import classes from './ProductCarrousel.module.scss'
import ProductItemDetail from '../product/ProductItemDetail'


const ProductsCarrousel = (props) => {

    const [productsCarrousel, setProductsCarrousel]= useState();
    const [loading, setLoading] =useState(true);

    useEffect(() => {
		getProducts().then((result) => {
            setProductsCarrousel(result.slice(1,5));
            console.log(result);
            setLoading(false);
        })
	}, []);
    
    
    return(<>
        <h1>Otros productos que te pueden interesar</h1>
        <div className={classes.carrousel}>
        {
            loading
            ?
            <h1> cargando porudctos que te pueen interesar</h1>
            :
            productsCarrousel.map(product =><ProductItemDetail product={product}/>)
        }     
        </div>
      </>
    )
}

export default ProductsCarrousel


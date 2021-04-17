
import {useState, useEffect} from 'react'
import './ProductCarrousel.module.scss'
import {getProducts} from '../../backend/Sheets';


const ProductsCarrousel = (props) => {

    const [productsCarrousel, setProductsCarrousel]= useState();
    const [loading, setLoading] =useState(true);

    useEffect(() => {
		getProducts().then((result) => {
            setProductsCarrousel(result);
            console.log(result);
            setLoading(false);
        })
	}, []);
    
    
    return(
      <>
        {
            loading
            ?
            <h1> cargando porudctos que te pueen interesar</h1>
            :
            
            productsCarrousel.map(product =>
                <h3>{product.title}</h3>    
            )
        }
           
      </>
    )
}

export default ProductsCarrousel


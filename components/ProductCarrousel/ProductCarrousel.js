
import {useState, useEffect} from 'react'
import './ProductCarrousel.module.scss'
import {getProducts} from '../../backend/Sheets';
import classes from './ProductCarrousel.module.scss'


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

            //aca para abajo
                <div className={classes.container}>
                 
                 <h3>{product.title}</h3> 


                </div>
                 








            )
        }
           
      </>
    )
}

export default ProductsCarrousel


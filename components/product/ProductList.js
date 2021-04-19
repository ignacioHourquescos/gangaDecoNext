
import ProductItem from './ProductItem'
import styles from './ProductList.module.scss'
import {useEffect, useState} from 'react';
import Loader from '../UI/Loader.js'
import {getProducts} from '../../backend/Sheets';
import useAppContext from '../../context/AppContext';
import Button from '../UI/Button';

export default function ProductList (props) {
    const { cart } = useAppContext();


	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		setCartItems(cart);
	}, [])


    
    const [products, setProducts] = useState();
    const [loading, setLoading] =useState(true);
    
	useEffect(() => {
    
		getProducts().then((result) => {

            //setProducts(result.filter(product => product.stock!="no"));
            setProducts(result);
            setLoading(false);
        })

	}, []);

    return (

        <>

        <div className={styles.product_list}>
             {loading ? <Loader /> : <ProductItem className={styles.list} products={products} loading={loading} />} 
             <div style={{paddingTop:"4rem"}}>
             <Button link="/comoOCmprar"> ver mas productos</Button>
             </div>
        </div>
        
        </>
    )
}


 export async function getStaticProps() {
     const res = await getProducts();
    console.log("hola")
        return {
             props: {
               products: res.data,
             }
           }
  
}
  


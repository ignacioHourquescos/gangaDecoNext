
import ProductItem from './ProductItem'
import styles from './ProductList.module.scss'
import {useEffect, useState} from 'react';
import Loader from '../UI/Loader.js'
import {getProducts} from '../../backend/Sheets';


export default function ProductList() {

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
        </div>
        </>
    )
}
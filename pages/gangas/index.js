

import ProductItem from '../../components/product/ProductItem'
import styles from './index.module.scss'
import {useEffect, useState} from 'react';

import {getProducts, getCategories} from '../../backend/Sheets';


export default function ProductList (props) {
    const [products, setProducts] = useState();
    const [categories, setCategories] = useState(["Filtrar"]);
    const [loading, setLoading] =useState(true);
    
	useEffect(() => {
		getProducts().then((result) => {
            setProducts(result.filter(product =>product.ganga!=""));
            setLoading(false);
        })
	}, []);


    useEffect(() => {
		getCategories().then((result) => {
            setCategories(result.filter((v, i, a) => a.indexOf(v) === i));
            setLoading(false);
        })
	}, []);

    const handleFilterByCategory = (e) =>{
        getProducts().then((result) => {
            setProducts(result.filter(product =>product.categoria==e.target.value));
            setLoading(false);
        })
    }

    return (
    <>
        {/* <div className={styles.filtrar}>
            <h2>Filtrar por:</h2>
            <select className={styles.category} name="cars" form="categories" onChange={handleFilterByCategory}>
                { categories.map(category=>
                    <option value={category}>{category}</option>
                )}
            </select>
        </div> */}
        <h2 className={styles.title}> Gangas</h2>
        <div className={styles.product_list}>
             {loading ? "..." : <ProductItem className={styles.list} products={products} loading={loading} />} 
             <div style={{paddingTop:"4rem"}}/>
        </div>
        
    </>
    )
}




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

      
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(238, 223, 190, 0.418)" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,181.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
        <div className={styles.container_main}>
        <h2 className={styles.title}> Gangas</h2>
        <div className={styles.product_list}>
             {loading ? "..." : <ProductItem className={styles.list} products={products} loading={loading} />} 
             <div style={{paddingTop:"4rem"}}/>
        </div>
        </div>
    </>
    )
}


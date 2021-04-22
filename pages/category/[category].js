

import ProductItem from '../../components/product/ProductItem'
import styles from './index.module.scss'
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';
    

import {getProducts, getCategories} from '../../backend/Sheets';


export default function ProductList (props) {
    const [products, setProducts]       = useState([]);
    const [categories, setCategories]   = useState(["Filtrar"]);
    const [loading, setLoading]         = useState(true);
    const [loading2, setLoading2]       = useState(true);
    const [loading3, setLoading3]       = useState(true);

    const router = useRouter();
    var categoryParams = router.query.category;



	useEffect(() => {
		getProducts().then((result) => {
            setProducts(result.filter(product =>product.categoria==categoryParams));
            setLoading(false);
        })
	}, [categoryParams]);

    

    useEffect(() => {
		getCategories().then((result) => {
            setCategories(result.filter((v, i, a) => a.indexOf(v) === i));
            setLoading(false);
        })
	}, []);

    let orderedProducts=[];

    const handleFilter = (e) => {
        if(e.target.value==="asc"){
        setLoading2(false);
        setLoading3(true);
        orderedProducts = products.sort(function(a, b){return a.precio-b.precio});
        setProducts(orderedProducts); 
        }else{
            setLoading3(false);
            orderedProducts = products.sort(function(a, b){return b.precio-a.precio});
            setProducts(orderedProducts);
            setLoading2(true);         
        }
    }


    return (
    <><h2 className={styles.title}>{categoryParams}</h2>
        <div className={styles.filtrar}>
        
            <h2>Ordernar: </h2>        
            <select className={styles.category} name="cars" form="categories" onChange={handleFilter}>
            <option value="" selected>alfabetico</option>

            <option value="asc">Mas baratos</option>
            <option value="des">Mas caros </option>

            </select>
        </div>

        <div className={styles.product_list}>
             {loading ? "..." : <ProductItem  className={styles.list} products={products} loading={loading} />} 
             <div style={{paddingTop:"4rem"}}/>
        </div>
        
    </>
    )
}


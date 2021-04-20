

import ProductItem from '../../components/product/ProductItem'
import styles from './index.module.scss'
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';
    

import {getProducts, getCategories} from '../../backend/Sheets';


export default function ProductList (props) {
    const [products, setProducts] = useState();
    const [categories, setCategories] = useState(["Filtrar"]);
    const [loading, setLoading] =useState(true);
    const [selectedCategory, setSelectedCategory] = useState();
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

    const handleFilter = (e, categoryParams) =>{
        setSelectedCategory(e.target.value);
        if(e.target.value == "Categoria"){
            getProducts().then((result) => {
                setProducts(result);
                setLoading(false);
            })
        } else{
            getProducts().then((result) => {
                setProducts(result.filter(product =>product.categoria==e.target.value));
                setLoading(false);
            })
        }
    }

    var options


    return (
    <><h2 className={styles.title}>{categoryParams}</h2>
        <div className={styles.filtrar}>
        
            <h2>Ordernar: </h2>        
            <select className={styles.category} name="cars" form="categories" onChange={handleFilter}>
            <option value="desc" selected>Mas baratos</option>
            <option value="asc" selected>Mas caros </option>
            </select>
        </div>

        <div className={styles.product_list}>
             {loading ? "..." : <ProductItem  className={styles.list} products={products} loading={loading} />} 
             <div style={{paddingTop:"4rem"}}/>
        </div>
        
    </>
    )
}




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
            setProducts(result);
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
    <>
   
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(238, 223, 190, 0.418)" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,181.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
        <div className={styles.container_main}>
    <h2 className={styles.title}>Todos los productos</h2>
        <div className={styles.filtrar}>
        
            <h2>Ordernar: </h2>        
            <select className={styles.category} name="cars" form="categories" onChange={handleFilter}>
            <option className={styles.category} value="" selected>alfabetico</option>
            <option className={styles.category} value="asc">Mas baratos</option>
            <option className={styles.category} value="des">Mas caros </option>

            </select>
        </div>

        <div className={styles.product_list}>
             {loading ? "..." : <ProductItem  className={styles.list} products={products} loading={loading} />} 
             <div style={{paddingTop:"4rem"}}/>
        </div>
        
    </div>
    </>
    )
}



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




  

// var id="18b2yH4VG9-5m8RmsZffjbjc6V_phSntqtbR6VxdUhjs";
// var sheet="1"



// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://spreadsheets.google.com/feeds/list/'+id+'/'+sheet+'/public/full?alt=json')
//     const res2 = await res.json()
//     const data = await res2.feed.entry
//     const array = ObjectConstructor(data)
//     const posts = JSON.stringify(array)
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }

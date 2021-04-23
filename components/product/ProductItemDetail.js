
import { useRouter } from 'next/router';

import React, {useEffect, useState} from 'react';
import styles from './ProductItemDetail.module.scss'
import {getImagesFromFirestore, getSingleProductFromDatabase} from '../../backend/Sheets'
import Loader2 from '../UI/Loader2'
import 'antd/dist/antd.css';
import Image from 'next/image';
import { Spin } from 'antd';
import classNames from 'classnames';
import useAppContext from '../../context/AppContext';

const ProductItemDetail = ({product}) =>{
    const { handleCart, cart, order, ItemQuantity } = useAppContext();
        const [image, setImage]=useState();
        const [loading2, setLoading2]=useState(true);
        const [bubble, setBubble] = useState(false);
    
    const router = useRouter();
    const goToProductHandler = (productId) => {
        const fullPath = `/productos/${productId}`;
        router.push(fullPath);
    }

    //ADD TO CART HANDLER
    const addToCartHandler = () =>{
        handleCart(1,{"id":product.id, "title":product.title, "price":product.precio });
        setBubble(true);
    }

    useEffect(()=>{
        getSingleProductFromDatabase(product.id.toString())
        .then(data=>{
            setImage(data);
            setLoading2(false);
    })
        }
            )

            
        

    return(<>
       
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
    </head>

    <div  key={product.id} className={styles.product_container}>
            
        <div className={styles.image_container}>
            {product.stock==0? 
                    <div className={styles.sold_out}>
                        <h3>Agotado</h3>
                    </div>
                : product.ganga!=""?
                        <div className={styles.special_offer}>{product.ganga}</div>
                    :
                ''        
            }
            {loading2
                ?
                    <div className={styles.loader}>
                    <Spin/>
{/*                     
                    <Loader2/> */}
                    </div> 
                :
                <>
                {bubble  ? <div className={styles.bubble}><div className={styles.dot}></div></div> : ""}
                
                <Image className={styles.image}  
                    onClick={() => {goToProductHandler(product.id)}} 
                    alt={product.title} 
                    priority={false} 
                    src={image} 
                    layout="fill"
                />
                {product.stock==0? 
                    ""
                :      
            
                <div className={styles.add_to_cart_icon1}>
                    <div className={styles.add_to_cart_icon} onClick={()=>{addToCartHandler()}}>{addToCartIcon}</div> 
                </div>
                }
                </>

            }
               
        </div>
        <div className={styles.data_container}  onClick={() => {goToProductHandler(product.id)}}>
            <h3 className={styles.title}>{product.title}</h3>
            <h4 className={styles.price}>${product.precio}</h4>
            <h5 className={styles.id}>Codigo: {product.id}</h5>
        </div>
    </div>
     </>
    )
}

export default ProductItemDetail;

const addToCartIcon=
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
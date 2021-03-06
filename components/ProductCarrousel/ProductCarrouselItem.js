
import { useRouter } from 'next/router';

import React, {useEffect, useState} from 'react';
import styles from './ProductCarrouselItem.module.scss'
import {getImagesFromFirestore, getSingleProductFromDatabase} from '../../backend/Sheets'
import Loader from '../UI/Loader'
import 'antd/dist/antd.css';
import Image from 'next/image';
import { Spin } from 'antd';
import classNames from 'classnames';

const ProductCarrouselItem= ({product}) =>{

        const [image, setImage]=useState();
        const [loading2, setLoading2]=useState(true);
    
    const router = useRouter();
    const goToProductHandler = (productId) => {
        const fullPath = `/productos/${productId}`;
        router.push(fullPath);
    }

    useEffect(()=>{
        getSingleProductFromDatabase(product.id.toString())
        .then(data=>{
            setImage(data);
            setLoading2(false);
    })
        }
            )

            
        

    return(
    <div  key={product.id} className={styles.product_container} onClick={() => {goToProductHandler(product.id)}}>
            
                <div className={styles.image_container}>
                    {
                            product.stock==="no"
                        ? 
                            <div className={styles.sold_out}>
                                <h3>Agotado</h3>
                            </div>
                        :
                                product.ganga!=""
                            ?
                                <div className={styles.special_offer}>{product.ganga}</div>
                            :
                        ''        
                    }


                    {
                        loading2
                        ?
                        <div className={styles.loader}>
                        <Spin/>
                        </div>
                        
                        :
                        <Image className={styles.image} alt={product.title} priority={false} src={image} width={300} height={300} layout="fixed"/> 

                    }
                       
                </div>
                <div className={styles.data_container}>
                    <h3 className={styles.title}>{product.title}</h3>
                    <h4 className={styles.price}>${product.precio}</h4>
                    <h5 className={styles.id}>Codigo: {product.id}</h5>
                </div>
            </div>
    )
}

export default ProductCarrouselItem;
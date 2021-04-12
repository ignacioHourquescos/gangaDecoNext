import React from 'react';
import styles from './ProductItem.module.scss'


const ProductItem = props =>{

    return(
        <>      
        {props.products.map(product =>
            <div className={styles.product_container}>
                <div className={styles.image_container}>
                    {
                            product.stock==="no"
                        ? 
                            <div className={styles.sold_out}>
                                <h3>😢</h3>
                                <h3>Sin stock</h3>
                            </div>
                        :
                                product.ganga==="si"
                            ?
                                <div className={styles.special_offer}>⚡</div>
                            :
                           ''        
                    }
                    <img className={styles.image} alt={product.title} src={product.imagen} />    
                </div>
                <div className={styles.data_container}>
                    <h3 className={styles.title}>{product.title}</h3>
                    <h4 className={styles.price}>{product.precio}</h4>
                    <h5 className={styles.id}>Codigo: {product.id}</h5>
                </div>
            </div>)
        }
        </>
    )
}


export default ProductItem;

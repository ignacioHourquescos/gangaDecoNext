
import React, {useEffect, useState} from 'react';

import {getSingleProductFromDatabase} from '../../backend/Sheets'
import ProductItemDetail from './ProductItemDetail'


const ProductItem = props =>{
 

    return(
        <>      
        {
            props.products.map(product => 
                <ProductItemDetail key={product.id} product={product}/>)

        }

        </>
    )
}


export default ProductItem;



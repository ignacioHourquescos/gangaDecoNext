
import React, {useEffect, useState} from 'react';

import {getSingleProductFromDatabase} from '../../backend/Sheets'
import ProductItemDetail from './ProductItemDetail'


const ProductItem = props =>{
 
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log("aca esta la imagne que buscmaos");
        console.log(props.products[0].id);
        getSingleProductFromDatabase(props.products[1].id.toString())
        .then(data => {
    
            setLoading(false);
            console.log("aca despues del then");
            console.log(data)
        })
    },[])

    return(
        <>      
        {
            loading
            ?
            <h1>..</h1>
            :
            props.products.map(product => 
                <ProductItemDetail product={product}/>)
        

        }

        </>
    )
}


export default ProductItem;



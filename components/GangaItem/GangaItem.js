import { element } from "prop-types"
import React, {useEffect, useState} from "react"
import classes from './GangaItem.module.scss'
import {getImagesFromFirestore, getProducts, getSingleProductFromDatabase} from '../../backend/Sheets'
import { useRouter } from 'next/router';
import Image from 'next/image'

                                                                                        

const GangaItem = (props) => {  

    const [image, setImage]=useState("");
    const [loading2, setLoading2]=useState(true);

    const router = useRouter();
    const goToProductHandler = (productId) => {
        const fullPath = `/productos/${productId}`;
        router.push(fullPath);
    }



    useEffect(()=>{
        getSingleProductFromDatabase(props.product.id.toString())
        .then(data=>{
            setImage(data);
            setLoading2(false);

           
    })
        }
            )
        
            
    return(
    <>
        {
            props.product.index % 2 != 0
            ?
            <div className={classes.container_big}  onClick={() => {goToProductHandler(props.product.id)}} >

                <div className={classes.svg}>{props.svg}
                <div className={classes.data_container} >
                    <img className={classes.img} src={image}></img>
                    <p className={classes.title}>{props.product.title}</p>
                    <p className={classes.price}>${props.product.precio}</p>
                    <div className={classes.go_to_ganga}>
                        <svg width="493" height="444" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="null" id="svg_1" fill={props.color} d="m48.89911,13.18639c17.60939,-1.98808 31.44038,12.30701 35.1021,18.67974c3.66172,6.37273 13.3524,20.29013 1.07122,42.0286c-10.32754,18.28063 -40.72901,18.66219 -48.52186,17.9433c-7.79285,-0.71889 -52.83655,-12.62563 -29.1784,-39.81947c23.65815,-27.19384 23.91754,-36.8441 41.52693,-38.83218z" clip-rule="evenodd" fill-rule="evenodd" opacity="1"/>
                        </svg>
                    </div>
                </div>
                
                </div>
                
            </div>  
            :

            <div className={classes.container_small}   onClick={() => {goToProductHandler(props.product.id)}} >
                <div className={classes.svg}>{props.svg} 
                <div className={classes.data_container}>
                    <img className={classes.img} src={image}></img>
                    <p className={classes.title}>{props.product.title}</p>
                    <p className={classes.price}>${props.product.precio}</p>
                    <div className={classes.go_to_ganga}>
                        <svg width="493" height="444" xmlns="http://www.w3.org/2000/svg"> 
                        <path stroke="null" id="svg_1" fill={props.color} d="m28.07943,13.11028c10.02326,-1.18311 17.89586,7.32392 19.98011,11.11635c2.08425,3.79242 7.60018,12.07469 0.60974,25.01129c-5.87843,10.87883 -23.18294,11.1059 -27.61863,10.67809c-4.43569,-0.42781 -30.07456,-7.51353 -16.60834,-23.69663c13.46622,-16.1831 13.61386,-21.92598 23.63712,-23.10909z" clip-rule="evenodd" fill-rule="evenodd" opacity="1"/>
                        </svg>
                    </div>
                </div>
                </div>
                
            </div>     


        }
  
    </>)
      
}

export default GangaItem



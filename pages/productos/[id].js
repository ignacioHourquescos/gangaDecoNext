import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import {getProductsById }from '../../backend/Sheets'

import classes from './[id].module.scss'


function EventDetailPage() {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const router = useRouter();
    const eventId = router.query.id;

  useEffect(()=>{
      setLoading(true)
      getProductsById(eventId)
      .then((result) => { setProduct(result)})
      .then(() => setLoading(false))
    

  },[eventId])


  return (
    <>

    {
        loading
        ?<h1>Loading....</h1>
        :<div className={classes.container}>

            <div className={classes.image}>
                <img className={classes.src} src={product.image}></img>
            </div>

            <div className={classes.detail}>
                <h1 classes={classes.title}>    {product.title}</h1>
                <h2 classes={classes.price}>    {product.price}</h2>
                <h3 classes={classes.payment}>  metodos de pago</h3>
                <h2 classes={classes.subtitle}> Descripcion</h2>
                <h2 classes={classes.desc}>     {product.desc}</h2>
                <h2 classes={classes.subtitle}> Colores</h2>
                <h2 classes={classes.colors}>   {product.title}</h2>
                <h2 classes={classes.subtitle}> Codigo</h2>
                <h2 classes={classes.code}>     {product.id}</h2>
            </div>





        </div>
    }
      
    </>
  );
}

export default EventDetailPage;

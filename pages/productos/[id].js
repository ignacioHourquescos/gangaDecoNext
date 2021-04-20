import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import {getProductsById }from '../../backend/Sheets'
import Carrousel from "../../components/Carrousel/Carrousel"

import head from 'next/head'
import classes from './[id].module.scss'
import classNames from 'classnames'


function EventDetailPage() {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const router = useRouter();
    const eventId = router.query.id;

  useEffect(()=>{
      setLoading(true)
      getProductsById(eventId)
      .then((result) => {setProduct(result)})
      .then(() => setLoading(false))
    

  },[eventId])

  const card = classNames(classes.card,"card col-md-4 border-0 px-0")
  const cardTitle = classNames(classes.cardTitle,"card-title")
  const cardLink = classNames(classes.cardLink,"card-link d-inline-block mb-3")


 

  return (
    <>
    

    {   
    <div>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
        </head>
        loading
        ?<h1>Loading....</h1>
        :<div className={classes.container}>
            <div className='container-fluid'></div>
            <div className='row'>

                {/* capturas pequeñas */}
                <div className='d-none d-md-block col-md-2 pl-0 pr-4 d-md-flex flex-column justify-content-star align-items-end'>
                    <div className="ml-auto mb-2 w-75">
                        <div className={classes.imgContainer}>
                            <img src={product.image} className={classes.img}/>                            
                        </div>
                    </div>
                    <div className="ml-auto mb-2 w-75">
                        <div className={classes.imgContainer}>
                            <img src={product.image} className={classes.img}/>                            
                        </div>
                    </div>
                    <div className="ml-auto mb-2 w-75">
                        <div className={classes.imgContainer}>
                            <img src={product.image} className={classes.img}/>                            
                        </div>
                    </div>
                </div>


              <Carrousel/>




                {/* foto principal version desktop */}
                <div className='col-md-6 pl-0 pr-4 d-none d-md-block'>
                    <div className={classes.imgContainer}>
                        <img src={product.image} className={classes.img}/>
                    </div>
                </div>

                {/* tarjeta con la info del preducto */}
                <div className={card}>
                    <div className="card-body px-0">
                        <h5 className={cardTitle}>{product.title}</h5>
                        <h5 className="card-subtitle text-muted mb-1">{product.price}</h5>
                        <a href="#" className={cardLink}>Ver los medios de pago</a>
                        <h6 className="card-subtitle">Descripcion</h6>
                        <p className="card-text">{product.desc}</p>
                        <h6 className="card-subtitle">Colores</h6>
                        <p className="card-text">Aca irian los colores</p>
                        <h6 className="card-subtitle">Codigo</h6>
                        <p className="card-text">{product.id}</p>
                    </div>
                </div>
            </div>

                      
            

        </div>

    </div>    
    }
      
    </>
  );
}
export default ProductDetailPage;
export default productosCarousel;

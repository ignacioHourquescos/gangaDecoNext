import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import {getProductsById, getSingleProductFromDatabase }from '../../backend/Sheets'

import head from 'next/head'
import classes from './[id].module.scss'
import classNames from 'classnames'
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel'
import useAppContext from '../../context/AppContext';

function ProductDetailPage() {

    const { handleCart, cart, order} = useAppContext();
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState();
    const [loading2, setLoading2] = useState(true);
    const [product, setProduct] = useState([]);
    const router = useRouter();
    const eventId = router.query.id;

    const addToCartHandler = () =>{
        handleCart(1,{"id":eventId, "desc":product.title, "price":product.price});
        console.log(cart);
    }

  useEffect(()=>{
      setLoading(true)
      getProductsById(eventId)
      .then((result) => {setProduct(result)})
      .then(() => setLoading(false))


  },[eventId])

  useEffect(()=>{
    getSingleProductFromDatabase(eventId.toString())
    .then(data=>{
        setImage(data);
        setLoading2(false);
    })
    },[])


  const card = classNames(classes.card,"card col-md-4 border-0 px-0")
  const cardTitle = classNames(classes.cardTitle,"card-title")
  const cardLink = classNames(classes.cardLink,"card-link d-inline-block mb-3")
 

  return (
    <>
            <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
        </head>

    {   

        loading
        ?<h1>Loading....</h1>
        :<div className={classes.container}>
            <div className='container-fluid'></div>
            <div className='row'>
                <div className='col-md-2 pl-0 pr-4 d-flex flex-column justify-content-star align-items-end'>
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

                <div className='col-md-6 pl-0 pr-4'>
                    <div className={classes.imgContainer}>
                        {
                            loading2
                            ?
                            <h1>loading</h1>
                            :
                            <img src={image} className={classes.img}/>
                        }
                    </div>
                </div>

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
                        <button onClick={addToCartHandler}> Comprar</button>
                    </div>
                </div>
            </div>


            <ProductCarrousel products/>

                      
{/*                         <div className={classes.detail}>
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
 */}            

        </div>
       
    }
      
    </>
  );
}

export default ProductDetailPage;

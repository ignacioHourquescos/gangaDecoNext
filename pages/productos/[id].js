import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import {getProductsById, getSingleProductFromDatabase }from '../../backend/Sheets'
import Button from '../../components/UI/Button'
import head from 'next/head'
import classes from './[id].module.scss'
import classNames from 'classnames'
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel'
import useAppContext from '../../context/AppContext';

function ProductDetailPage() {

    const { handleCart, cart, order, ItemQuantity } = useAppContext();
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState();
    const [image2, setImage2] = useState();
    const [loading2, setLoading2] = useState(true);
    const [bubble, setBubble] = useState(false);
    const [product, setProduct] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [currentItemQuantity, setCurrentItemQuantity] = useState();
    const [units, setUnits] = useState();
    const router = useRouter();
    const eventId = router.query.id;

    //DATA FECTHING

    useEffect(()=>{
        getSingleProductFromDatabase(eventId)
        .then(data=>{
            setImage(data);
            setLoading2(false);
    })},[eventId])


    useEffect(()=>{
        getSingleProductFromDatabase(eventId+".amarillo")
        .then(data=>{
            setImage2(data);
            setLoading2(false);
    })},[eventId])



    useEffect(()=>{
        getProductsById(eventId)
        .then((result) => {setProduct(result)})
        .then(() => setLoading(false))
    },[eventId])
    
    //ADD TO CART HANDLER
    const addToCartHandler = () =>{
        handleCart(units,{"id":eventId, "title":product.title, "price":product.price});
        setBubble(true);
    }

    const restarUnidad = (itemCount) => {
        if (itemCount > 0) setItemCount(itemCount - 1)
    }

    const sumarUnidad = (itemCount) => {
        if (itemCount < product.stock) setItemCount(itemCount + 1);
    }


  useEffect(() => {
    setItemCount(itemCount);
    setCurrentItemQuantity(ItemQuantity(product));
    setUnits(itemCount)
}, [itemCount, cart,ItemQuantity,product]);


  const card = classNames(classes.card,"card col-md-4 border-0 px-0")
  const cardTitle = classNames(classes.cardTitle,"card-title")
  const cardLink = classNames(classes.cardLink,"card-link d-inline-block mb-3")
 

  return (
    <>
        {bubble  ? <div className={classes.bubble}><div className={classes.dot}></div></div> : ""}
            <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
        </head>

    {   


        loading
        ?<h1>Loading....</h1>
        :<div className={classes.container}>
            <div className='container-fluid'></div>
            <div className='row'>
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
                        <h5 className={cardTitle}>                          {product.title}             </h5>
                        <h5 className="card-subtitle text-muted mb-1">      {product.price}             </h5>
                        <a href="#" className={cardLink}>                   Ver los medios de pago      </a>
                        <h6 className="card-subtitle">                      Descripcion                 </h6>
                        <p className="card-text">                           {product.desc}              </p>
                        <h6 className="card-subtitle">                      Colores                     </h6>
                        <p className="card-text">                           Aca irian los colores       </p>
                        <h6 className="card-subtitle">                      Codigo                      </h6>
                        <p className="card-text">                           {product.id}                </p>
                        


                        <div className="add_to_cart_ItemCount">
                            <button onClick={() => { restarUnidad(itemCount) }}>-</button>
                            <span>{itemCount}</span>
                            <button onClick={() => { sumarUnidad(itemCount) }}>+</button>   
                        </div>
              
                        <Button onClick={()=>{addToCartHandler()}}>
                         Agregar a Carrito
                        </Button>


                    </div>
                </div>
            </div>




                      
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

    <ProductCarrousel product={eventId}/> 
      
    </>
  );
}

export default ProductDetailPage;

import classes from './Cart.module.scss';
import {useState,useRef, useEffect} from 'react'
import useAppContext from '../../context/AppContext';
import Checkout from '../Checkout/checkout'
import Backdrop from '../layout/Backdrop'
import Button from '../UI/Button'

const Cart = () => {
    const {order, generateOrder, cart, user, handleUserData} =useAppContext();
    const [cartIsVisible, setCartIsVisible]=useState(false);
    const nameRef = useRef("nombre");

    const toogleCartHandler = () =>{
        setCartIsVisible((prevState)=>{setCartIsVisible(!prevState.cartIsVisible)})
        console.log(cartIsVisible);
        
    }

    const closeMenu = () =>{
        setCartIsVisible(false);
    }


    return(<>
        <div className={classes.icon} >
        {/* <div className={classes.icon} onClick={toogleCartHandler}> */}
            {/* <img src="/carrito.png" className={classes.icon} alt='mail image'/> */}
            <div className={classes.icon} onClick={toogleCartHandler}>{cartIcon}</div>
        </div>
        {
            cartIsVisible
            ?
            <>
            <div className={classes.cart_container}>
                <div className={classes.close} onClick={closeMenu}>{closeIcon}</div>
                <h1 className={classes.title}>Mi pedido</h1>
                <ul>
                {
                    cart.length==0
                    ?
                    <h3>no tiene productos seleccionados</h3>
                    :
                    cart.map(product=><li key={product.id}>{product.quantity} x {product.desc}</li>)
                }
                </ul>
                
                {/* <input type="text" placeholder={"Nombre"} ref={nameRef}></input> */}
                {/* {
                   nameRef==null
                    ?
                    <button>
                    <Checkout number="5411 65106333" message={"hello "} name={""}/>
                    </button>
                    :
                    ""
                } */}

                <Button>
                    <Checkout number="5411 65106333" message={"hello "} name={""}/>
                </Button>
        
            </div>
            <Backdrop click={closeMenu}/>
            </>
            :
            ""
        }
    </>)
}

export default Cart




const closeIcon= 
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


const cartIcon =
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
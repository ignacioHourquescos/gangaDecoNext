import classes from './Cart.module.scss';
import {useState,useRef, useEffect} from 'react'
import useAppContext from '../../context/AppContext';
import Checkout from '../Checkout/checkout'

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
        <div className={classes.icon} onClick={toogleCartHandler}>
            <img src="/carrito.png" className={classes.icon} alt='mail image'/>
        </div>
        {
            cartIsVisible
            ?
            <div className={classes.cart_container}>
                <div className={classes.close} onClick={closeMenu}>X</div>
                <h1 >Mi pedido</h1>
                <ul>
                {cart.map(product=><li key={product.id}>{product.quantity} x {product.desc}</li>)}
          
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

                <button>
                    <Checkout number="5411 65106333" message={"hello "} name={""}/>
                </button>
        
            </div>
            :
            ""
        }
    </>)
}

export default Cart




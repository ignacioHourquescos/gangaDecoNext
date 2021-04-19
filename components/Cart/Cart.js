import classes from './Cart.module.scss';
import {useState,useRef, useEffect} from 'react'
import useAppContext from '../../context/AppContext';
import Checkout from '../Checkout/checkout'

const Cart = () => {
    const {order, generateOrder} =useAppContext();
    const [cartIsVisible, setCartIsVisible]=useState(false);
    const nameRef = useRef();

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
                <h1 >Carrtio</h1>
                <ul>
                    <li>1 x Bowl plastico</li>
                    <li>2 x Termo</li>
                </ul>
                <h1 >nombre</h1>
                <input rtype="text" placeholder={"Nombre"}></input>

                
                {
                    nameRef 
                    ?
                    <button>
                    <Checkout number="5411 65106333" message={"hello "} name="Fulano" />
                    </button>
                    :
                    ""
                }
        
            </div>
            :
            ""
        }
    </>)
}

export default Cart




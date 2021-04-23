import classes from './Cart.module.scss';
import {useState,useRef, useEffect} from 'react'
import useAppContext from '../../context/AppContext';
import Checkout from '../Checkout/checkout'
import Backdrop from '../layout/Backdrop'
import Button from '../UI/Button'
import { Badge } from 'antd';
import 'antd/dist/antd.css';


const Cart = () => {
    const {cart, getTotalCartValue, eliminateItem} =useAppContext();
    const [cartIsVisible, setCartIsVisible]=useState(false);
    const name = useRef(null);
    const adress = useRef(null);
    const [selectedName, setSelectedName]=useState();
    const [selectedAdress, setSelectedAdress] = useState();
    //academind
    const ContactForm =()=>{
        event.preventDefault();
    }

    const toogleCartHandler = () =>{
        setCartIsVisible((prevState)=>{setCartIsVisible(!prevState.cartIsVisible)})
        console.log(cartIsVisible);
        
    }

    const closeMenu = () =>{
        setCartIsVisible(false);
    }

   
        const nameForm = useRef(null)
      
        const handleData = () => {
          setSelectedName(name.current.value);
          setSelectedAdress(adress.current.value);

        }

    return(<>
        <div className={classes.icon} >
            { cart.length>0
            ?
            <Badge count={5}>
            <div className={classes.icon2} onClick={toogleCartHandler}>{cartIcon}</div>
            </Badge>
            :
            <div className={classes.icon} onClick={toogleCartHandler}>{cartIcon}</div>
            }

        </div>
        {
            cartIsVisible
            ?
            <>
            <div className={classes.cart_container}>
                <div className={classes.close} onClick={closeMenu}>{closeIcon}</div>
                <h1 className={classes.title}>Mi pedido</h1>
                
                {
                    cart.length==0
                    ?
                    <h3 className={classes.placeholder}>no tiene productos seleccionados</h3>
                    :
                    <div classname={classes.cart_list}>
                        {cart.map(p=><div className={classes.item}>
                          
                         
                            <p className={classes.cart_item} key={p.id}>{p.quantity} X {p.title}</p>
                            <p>${p.quantity*p.price}</p>
                            <p className={classes.eliminate} onClick={eliminateItem}>{closeIcon}</p>
                        </div>)}
                    </div>
                }
               
                <div>
                <hr size="8" width="100%" color="grey"/>  
                <h3 className={classes.placeholder}>${getTotalCartValue}</h3>
                </div>

                <div className={classes.checkout_bottom}>

                    <form>
                    <input onChange={handleData} type="text" ref={name} placeholder="nombre" className={classes.input_text}/> 
                    <input onChange={handleData} className={classes.input_text} placeholder="direccion" ref={adress} type="text" />
                    </form>

                    <Button >
                        <Checkout number="5411 35884485" message={"hello "} name={selectedName} adress={selectedAdress} />
                    </Button>
                    </div>
            </div>
            <Backdrop click={closeMenu}/>
            </>
            :
            <div className={classes.cart_container_close}/>
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
import React from 'react';
import classes from './checkout.module.scss'
import useAppContext from '../../context/AppContext';
const URL = 'https://wa.me';

const ReactWhatsapp = ({ number,name,message, element, onClick, ...props }) => {
  
    const { handleCart, cart, order} = useAppContext();

    number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');

    let url = `${URL}/${number}`;
    let pedido = cart.reduce(function(a, b) {return a + ["", ""][+!!a.length] + b.quantity+" x ("+ b.id + ") " + b.desc +"%0a";}, "");

     if (cart.length>0) {
         url += `?text=Hola!  %0aTe escribo porque me interesan estos prodcutos! %0a${pedido}` 
     }

    return (
        <div className={classes.button2}  {...props} onClick={(e) => {window.open(url); if (onClick) {onClick(e);}}}>
            Hacer pedido via Wpp
        </div>
    )
};


export default ReactWhatsapp;
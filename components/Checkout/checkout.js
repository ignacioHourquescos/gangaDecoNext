import React from 'react';
import PropTypes from 'prop-types';
import classes from './checkout.module.scss'
import useAppContext from '../../context/AppContext';
const URL = 'https://wa.me';

const ReactWhatsapp = ({ number,name,message, element, onClick, ...props }) => {
  const Element = element;
    const { handleCart, cart, order} = useAppContext();

  number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');

  let url = `${URL}/${number}`;

    
  if (cart.length>0) {
    url += `?text=Hola soy ${name}de Villa de Mayo %0a Me intersan estos productos %0a\
    ${cart[0].quantity} x ${cart[0].id} x ${cart[0].desc} %0a\
    ${cart[1].quantity} x ${cart[1].id} x ${cart[1].desc} %0a\
    ${cart[2].quantity} x ${cart[2].id} x ${cart[2].desc} %0a`;
    //url += `?text=%0a‎Hello%0aWorld`;


    
  }

  return (
      <div className={classes.button2}  {...props} onClick={(e) => {window.open(url); if (onClick) {onClick(e);}}}>
        wpp
        </div>
  );
};

ReactWhatsapp.propTypes = {
  number: PropTypes.string.isRequired,
  message: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

ReactWhatsapp.defaultProps = {
  element: 'div',
};

export default ReactWhatsapp;
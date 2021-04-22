import React from 'react';
import PropTypes from 'prop-types';
import classes from './wpp.module.scss'
import useAppContext from '../../context/AppContext';
const URL = 'https://wa.me';

const ReactWhatsapp = ({ number, message, name, adress, element, onClick, ...props }) => {
  const Element = element;
    const { handleCart, cart, order} = useAppContext();

  number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');

  let url = `${URL}/${number}`;

  if (message) {
    //url += `?text=${encodeURI("Hola soy"+name +"de villa de mayoi %/a Me intersan estos porductos %0a1 x Bowl plastico%02 x termo" )}`;
    // url += `?text=${encodeURI("Hola soy"+name +"de" + adress + order[0].id)}`;
    url += `?text=Hola queria mas informacion`;

    
  }

  return (
      <div className={classes.button2}  {...props} onClick={(e) => {window.open(url); if (onClick) {onClick(e);}}}>
        <img src="./whatsapp.png" width={"50%"} height={"50%"}/>
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
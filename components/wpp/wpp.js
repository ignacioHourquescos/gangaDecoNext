import React from 'react';
import PropTypes from 'prop-types';
import classes from './wpp.module.scss'

const URL = 'https://wa.me';

const ReactWhatsapp = ({ number, message, element, onClick, ...props }) => {
  const Element = element;

  number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');

  let url = `${URL}/${number}`;

  if (message) {
    url += `?text=${encodeURI(message)}`;
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
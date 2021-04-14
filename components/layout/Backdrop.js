import React from 'react';
import classes from './Backdrop.module.scss'

const BackDrop = props => {
    return (
    <div className={classes.backdrop} onClick={props.click}/>
    )
} 
export default BackDrop
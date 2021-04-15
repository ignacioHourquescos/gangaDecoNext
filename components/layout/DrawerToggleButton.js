import React from 'react';

const drawerToggleButton = props =>{
    
    return (<button style={sytles.burgerIcon} onClick={props.click}>

    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
   </button> )
};

export default drawerToggleButton;


const sytles ={
    burgerIcon : {
        width:'18px',
        height:'18px',
        zIndex:'1000',
        padding:'0',
        textDecoration:'none',
        backgroundColor: 'transparent',
        border: 'none',
        postion: 'fixed',
        paddingTop: '1rem'

    }
}
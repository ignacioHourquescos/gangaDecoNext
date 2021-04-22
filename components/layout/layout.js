import {  useState } from 'react';

import BurgerMenu from './BurgerMenu';
import SideBar from './SideBar';
import Backdrop from './Backdrop';

function Layout(props) {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () =>{
        setSideDrawerOpen((prevState)=>{
            setSideDrawerOpen(!prevState.sideDrawerOpen);
            console.log(sideDrawerOpen);
        })
    }

    const closeMenu = () => {
        setSideDrawerOpen(false);
    }

    return (
    <>
        <BurgerMenu drawerToggleClickHandler={drawerToggleClickHandler} />
        <SideBar click={closeMenu} show={sideDrawerOpen}/> 
        { 
            sideDrawerOpen 
        ?  
            <Backdrop click={closeMenu}/>  
        :
        ''
        }
        <main>{props.children}</main>
    </>
  );
}

export default Layout;

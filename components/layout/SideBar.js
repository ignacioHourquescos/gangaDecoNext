import React from 'react';
import Link from 'next/link';

import classes from './SideBar.module.scss'

const SideBar = (props) => {



    return(<>
        {
            props.show
            ?
            <nav className={classes.side_drawer_open} onClick={props.click}>
                <ul>
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/quienesSomos">Quienes Somos</Link></li>
                    <li><Link href="/productos">Productos</Link></li>
                    <li><Link href="/gangas">Gangas</Link></li>
                    <li><Link href="/comoComprar">Como comprar</Link></li>
                    <li><Link href="/Contacto">Contacto</Link></li>
                </ul>
            </nav>
            :
            <nav className={classes.side_drawer} onClick={props.click}>

            </nav>
        }
</>
    )

}

export default SideBar;
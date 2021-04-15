import classes from './Header2.module.scss'

import Image from 'next/image'


const Header = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.header_main}>
              
                     <img className={classes.image} src="/logo2.png" alt="Logo Ganga Deco" />
              
            </div>
            <div className={classes.header_svg}>
            </div>

        </div>
    )
}

export default Header;

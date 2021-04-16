import classes from './Header.module.scss'
import Link from 'next/link'

import Image from 'next/image'


const Header2 = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.header_main}>
            <img className={classes.image} src="/logo2.png" alt="Logo Ganga Deco" />
                    <Link  href="/"><a className={classes.header_links}>Gangas</a></Link>
                    <Link  href="/"><a className={classes.header_links}>Como comprar</a></Link>
                    
                    <Link  href="/"><a className={classes.header_links}>Quienes somos</a></Link>
                    <Link  href="/"><a className={classes.header_links}>Contacto</a></Link>
            </div>
            <div className={classes.header_svg}>
{/* 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path className={classes.svg0} fillOpacity={svg[0].opacity} d={svg[0].svg}/>
                    <path className={classes.svg0} fillOpacity={svg[1].opacity} d={svg[1].svg}/>
                    <path className={classes.svg0} fillOpacity={svg[2].opacity} d={svg[2].svg}/>
                </svg> */}
            </div>

        </div>
    )
}

export default Header2;

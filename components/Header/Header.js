import classes from './Header.module.scss'
import Link from 'next/link'

import Image from 'next/image'


const Header = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.header_main}>
                    <Link  href="/"><img  className={classes.image} src="/Group1.png" alt="Logo Ganga Deco" /></Link>
                   <div>
                    <Link  href="/gangas"><a className={classes.header_links}>Gangas</a></Link>
                    <Link  href="/comoComprar"><a className={classes.header_links}>Como comprar</a></Link>
                    <Link  href="/quienesSomos"><a className={classes.header_links}>Quienes somos</a></Link>
                    <Link  href="/Contacto"><a className={classes.header_links}>Contacto</a></Link>
                    </div>
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

export default Header;


const svg = [
    {svg:"M0,160L120,138.7C240,117,480,75,720,64C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    opacity: "0.3"
    },
    {svg:"M0,256L120,218.7C240,181,480,107,720,69.3C960,32,1200,32,1320,32L1440,32L1440,0L1320,\
    0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    opacity: "0.5"
    },
    {svg:"M0,192L120,170.7C240,149,480,107,720,85.3C960,64,1200,64,1320,64L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    opacity: "0.2"
    },
    {svg: "M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,149.3C840,128,960,64,1080\
    ,64C1200,64,1320,128,1380,160L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840\
    ,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}

    
]




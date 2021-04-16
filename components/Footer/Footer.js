import head from 'next/head'
import classes from './Footer.module.scss'
import classNames from 'classnames'


const Footer= () =>{
    const footerMain = classNames(classes.footerMain,"container-fluid")
    return(
    <div>
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
        </head>
            <div>
                <div className={classes.footer_svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{display: "block"}}>
                        <path className={classes.svg0} fillOpacity={svg[0].opacity} d={svg[0].svg}/>
                    </svg>
                </div>
                <div className={footerMain}>
                    <div className='row'>
                        <div className='col text-center justify-content-center'> 
                            <img src="/logo2.png" className={classes.logoFooter} alt="logo ganga deco"/>
                            <img src='/ig-blanco.png' alt="instagram image"/>
                            <img src="/fb-blanco.png" alt="facebook image"/>
                        </div>
                        <div className='col text-center justify-content-center'>
                            <h5>Navegación</h5>
                            <ol>
                                <li>Home</li>
                                <li>Nosotros</li>
                                <li>Productos</li>
                                <li>Gangas</li>
                                <li>Cómo comprar</li>
                                <li>Contacto</li>
                            </ol>
                        </div>
                        <div className='col text-center justify-content-center'>               
                            <h5>Contactanos</h5>
                            <ol>
                                <li><img src="/wap-blanco.png" alt='wathsapp image'/>11-3588-4485</li>
                                <li><img src="/mail-blanco.png" alt='mail image'/>mail@mail.com</li>
                            </ol>                
                        </div>
                    </div>
                </div>
            </div>
    
    </div>
        )
}

export default Footer;

// valores de SVG
const svg = [
    {svg:"M0,128L80,112C160,96,320,64,480,85.3C640,107,800,181,960,202.7C1120,224,1280,192,1360,176L1440,\
    160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
    opacity: "1"
    },
]


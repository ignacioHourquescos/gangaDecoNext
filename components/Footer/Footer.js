import classes from './Footer.module.scss'


const Footer= () =>{
    return(
        <div className={classes.container}>

            <div className={classes.footer_svg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{display: "block"}}>
                    <path className={classes.svg0} fillOpacity={svg[0].opacity} d={svg[0].svg}/>
                </svg>
            </div>

            <div className={classes.footer_main}>
                <h1>aca va la data del footer segun prototipo</h1>

            </div>

        </div>
    )
}

export default Footer;

// valores de SVG
const svg = [
    {svg:"M0,128L80,112C160,96,320,64,480,85.3C640,107,800,181,960,202.7C1120,224,1280,192,1360,176L1440,\
    160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
    opacity: "0.7"
    },
]


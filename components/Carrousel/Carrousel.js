import { Carousel } from    'antd';
import                      'antd/dist/antd.css';
import classes from         './Carrousel.module.scss'
import Image         from   'next/image'

const Carrousel = () => {

    return (
    
    <div className={classes.carrousel_custom} >
            <Carousel autoplay>
                <div className={classes.carrousel_image}>
                <img className={classes.carrousel_image_src} src="/carrousel1.jpg"></img>
                 <Image className={classes.carrousel_image_src} alt="imagen de fondo" src="/carrousel1.jpg" layout='fill'/> 
                </div>
                <div className={classes.carrousel_image}>
                  <h3>2</h3>
                </div>
            </Carousel>

        </div>
    )


}

export default Carrousel
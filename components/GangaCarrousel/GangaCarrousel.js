import React, {useEffect, useState} from "react"
import classes                      from './GangaCarrousel.module.scss'
import {getProducts}                from '../../backend/Sheets'
import GangaItem                    from '../GangaItem/GangaItem'
import Carousel                     from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const GangaCarrousel = (props) =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =useState(true);
    
	useEffect(() => {
		getProducts().then((result) => {
            const data = result.filter(product =>product.ganga!="");
            data.forEach(element=>{element.index=data.indexOf(element), element.svg=Math.floor((Math.random() * 3) + 0)});
            setProducts(data);
            setLoading(false);
        })
	}, []);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    // const ganga = [
    //     {id:"1001", title:"Mate ceramica", price:"$1200", img:"/ganga1.jpg"},
    //     {id:"1001", title:"Mate plastico", price:"$1200", img:"/ganga1.jpg"},
    //     {id:"1001", title:"Mate madera", price:"$1200", img:"/ganga1.jpg"},
    //     {id:"1001", title:"Mate ceramica", price:"$1200", img:"/ganga1.jpg"}
    // ]

    // const gangaModified = ganga.forEach(element=>{element.index=ganga.indexOf(element), element.svg=Math.floor((Math.random() * 3) + 0)});

    
    return (
    <>
        <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(238, 223, 190, 0.418)" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,181.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
        <div className={classes.container_main}>
        
            <Carousel  
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            infinite={true}
            dotListClass="custom-dot-list-style"
            showDots={true}
            arrows={false}
            className={classes.container} 
            responsive={responsive}>
                 
                    {products.map(ganga =><GangaItem  
           
                        product={ganga} 
                        index={ganga.index} 
                        svg={svg[ganga.svg]} 
                        color={colors[ganga.svg]}
                    />)}
                 
            </Carousel>
        
        </div>
          
        
   </>);
}
  
export default GangaCarrousel; 


const colors = ["#5EBEFB","#FA73B7","#46EBCC"]


const svg =[

    <svg width="100%" height="100%" viewBox="0 0 475 502" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path  opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M0.026509 221.006C0.879748 123.714 28.7308 19.0808 141.087 3.15726C257.891 -13.3966 380.943 62.9303 447.623 157.57C503.696 237.155 465.355 318.299 406.962 380.516C339.91 451.957 250.89 533.42 136.829 488.711C19.659 442.783 -0.853348 321.332 0.026509 221.006Z" fill={colors[0]}/>
    </svg>,
    
    <svg width="100%" height="100%" viewBox="0 0 493 444" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path  opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M182.993 53.8571C271.961 3.35134 379.981 -30.9478 445.952 44.1893C514.534 122.301 501.418 253.878 445.803 353.183C399.035 436.692 307.594 450.848 224.199 440.151C128.438 427.867 13.4892 404.524 1.9393 296.249C-9.92534 185.023 91.2493 105.939 182.993 53.8571Z" fill={colors[1]}/>
    </svg>,
    
    <svg width="100%" height="100%" viewBox="0 0 498 472" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path  opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M178.993 50.859C267.986 0.414485 376.814 -31.8856 446.041 51.3161C518.008 137.812 508.458 278.221 454.776 382.312C409.633 469.846 317.081 481.25 231.993 466.361C134.289 449.265 16.7603 419.533 1.90477 303.07C-13.3556 183.434 87.2246 102.877 178.993 50.859Z" fill={colors[2]}/>
    </svg>
    
]




    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    

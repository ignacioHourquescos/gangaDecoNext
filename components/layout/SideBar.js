import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './SideBar.module.scss'
import { Collapse } from 'antd';
import {getCategories} from '../../backend/Sheets'

const SideBar = (props) => {
    const [categories, setCategories] = useState([]);
    const [showProducts, setShowProducts] = useState(false);
    const { Panel } = Collapse;

    useEffect(() => {
		getCategories().then((result) => {
            setCategories(result.filter((v, i, a) => a.indexOf(v) === i));

        })
	}, []);

    const router = useRouter();


    const goToCategoryHandler = (category) => {
        const fullPath = `/category/${category}`;
        router.push(fullPath);
    }

    return(<>
        {
            props.show
            ?
            <nav className={classes.side_drawer_open}>
            <div className={classes.close} onClick={props.click}>{closeIcon}</div>

  
                <ul onClick={props.click}>
                   <li><Link href="/" >Home</Link></li>
                   <li style={{color:"red"}}><Link href="/gangas" style={{color:"red"}}>Gangas</Link></li>
                   {/* <li><div classname={classes.li} onClick={showProductsHandler}>Productos</div></li>
                   {
                       showProducts
                       ?
                       categories.map(category=><li  key={category}><Link className={classes.li} href={category}>{category}</Link></li>)
                       :
                       ""
                   } */}
                   {categories.map(category=><li className={classes.li} onClick={()=>{goToCategoryHandler(category)}} key={category}>{' > ' + category}</li>)}

                  
                   <li><Link href="/quienesSomos">Quienes Somos</Link></li>
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

const closeIcon= 
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


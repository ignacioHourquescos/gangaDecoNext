import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './SideBar.module.scss'
import { Collapse } from 'antd';
import {getCategories} from '../../backend/Sheets'

const SideBar = (props) => {
    const [categories, setCategories] = useState([]);
    const [showProducts, setShowProducts] = useState(false);
    const codigo =useRef();

    useEffect(() => {
		getCategories().then((result) => {
            setCategories(result.filter((v, i, a) => a.indexOf(v) === i));
        })
	}, []);

    const router = useRouter();

    const pushProduct = () => {  
        const selectedYear = codigo.current.value;
        const fullPath = `/productos/${selectedYear}`;
        router.push(fullPath);
        props.click();
    }


    const goToCategoryHandler = (category) => {
        const fullPath = `/category/${category}`;
        router.push(fullPath);
        props.click();
    }

    return(<>
        {
            props.show
            ?
            <nav className={classes.side_drawer_open}>
            <div className={classes.close} onClick={props.click}>{closeIcon}</div>
            <div placeholder=" Buscar por codigo" style={styles.search_box_container}> 
            <input placeholder=" Buscar por codigo" style={styles.search_box}/> 
            <span style={styles.search_box_button}>{arrow}</span>
        </div>
                <ul >
               
      



                   <li onClick={props.click}><Link href="/">              Home</Link></li>
                   <li onClick={props.click}><Link href="/gangas" >       Gangas</Link></li>
                   {categories.map(category=>
                   <li className={classes.li} onClick={()=>{goToCategoryHandler(category)}} key={category}>{' > ' + category}</li>)}
                   <li onClick={props.click}><Link href="/quienesSomos">  Quienes Somos</Link></li>
                   <li onClick={props.click}><Link href="/comoComprar">   Como comprar</Link></li>
                   <li onClick={props.click}><Link href="/Contacto">      Contacto</Link></li>
              




                   <div style={{display:"flex", flexDirection:"row"}}>
                    <input type="text" ref={codigo} className={classes.li} placeholder="Buscar por codigo" style={{border:"none",width:"70%", margin:"5%",padding:"0 2rem"}} name="search"/>
                    <div className={classes.arrow} onClick={pushProduct}>{arrow}</div>
                </div>
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


const arrow =
<svg xmlns="http://www.w3.org/2000/svg" padding="0" margin="0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>

const styles ={

    search_box_container:{
        border:"1px solid grey",
        backgroundColor:"white",
        opacity:"0.8",
        borderRadius: "5px",
        padding:'0',
        display:"flex"
    },
    search_box:{
        border:"none",
        height:"100%",
        width:"80%",
        borderRadius: "5px"
    },
    search_box_button:{
        width:"35px",
        height:"100%",
        margin:"0",
        padding:"0",
        borderRadius: "5px",
        border:"none",
        backgroundColor:"none"
    }
}

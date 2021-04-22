import React,{useRef} from 'react';
import { useRouter } from 'next/router';
import styles from './DrawerToggleButton.module.scss'
const drawerToggleButton = props =>{
    const router = useRouter();

    const goToCategoryHandler = (category) => {
        const fullPath = `/category/${category}`;
        router.push(fullPath);
        props.click();
    }
    const pushProduct = () => {  
        const selectedYear = codigo.current.value;
        const fullPath = `/productos/${selectedYear}`;
        router.push(fullPath);
    
    }
    const codigo =useRef();

    return (
    <>   
       <button className={styles.burgerIcon} onClick={props.click}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
</svg>
        </button> 
        
        <div placeholder=" Buscar por codigo" className={styles.search_box_container2}> 
            <input ref={codigo} placeholder=" Buscar por codigo" className={styles.search_box2}/> 
            <span className={styles.search_box_button2}  onClick={pushProduct}>{arrow}</span>
        </div>
    </>)
};

export default drawerToggleButton;


// const styles ={
//     burgerIcon : {
//         width:'30px',
//         height:'53x',
//         zIndex:'1000',
//         padding:'0',
//         textDecoration:'none',
//         backgroundColor: 'transparent',
//         border: 'none'

//     },
//     search_box_container:{
//         border:"1px solid grey",
//         backgroundColor:"white",
//         opacity:"0.8",
//         borderRadius: "5px",
//         padding:'0',
//         marginLeft:"2rem",
//         display:"flex"
//     },
//     search_box:{
 
//         border:"none",
//         height:"100%",
//         borderRadius: "5px",
//     },
//     search_box_button:{
//         width:"35px",
//         height:"100%",
//         margin:"0",
//         padding:"0",
//         borderRadius: "5px",
//         border:"none",
//         backgroundColor:"none"
//     }
// }



const arrow =
<svg xmlns="http://www.w3.org/2000/svg" padding="0" margin="0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
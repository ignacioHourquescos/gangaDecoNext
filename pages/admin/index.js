import FileUpload from '../../firebase/FileUpload'
import classes from './index.module.scss'
import { getFirestore } from "../../firebase/index.js";
import {useState, useEffect} from 'react'

const Admin = () =>{

    const [uri, setUri] = useState();

    // useEffect(()=>{
    //     getSingleProductFromDatabase("1001")
    //     .then(data => setUri(data.url))
    // },[uri])


    return(
        <div className={classes.container}>
        <FileUpload/>
        <h1>Imagen</h1>
        <img src={uri}/> 
        </div>
    )
}
export default Admin;



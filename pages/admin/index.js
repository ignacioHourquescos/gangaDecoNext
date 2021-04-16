import {useState} from 'react';
import axios from 'axios'

 const Upload = () =>{
     const [selectedFile, setSelected]
     const fileSelectedHandler = event =>{
         console.log(event.target.files[0])
     }
     fileUploadHandler = () =>{
         axios.post()
     }


     return(<>
         <div>
             <input type="file" onChange={fileSelectedHandler}/>
             <button onClick={fileUploadHandler}>Upload</button>
         </div>
     </>)
 }
 export default Upload
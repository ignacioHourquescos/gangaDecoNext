import classNames from 'classnames';
import React, {useState, useRef, useEffect} from 'react';
import { storage, getFirestore } from "./index.js";
import classes from './FileUpload.module.scss'

import 'antd/dist/antd.css';
import { Progress } from 'antd';


const FileUpload = () => {
    const inputRef = useRef();
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [fileState, setFileState]=useState()
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };


    useEffect(() => {
        inputRef.current.focus();
      }, []);
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on("state_changed",snapshot => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              setFileState("Archivo Cargado correctamente!")
              let purchase = { url: url}
              getFirestore().collection("gangadeco").doc(""+inputRef.current.value).set(purchase)
            });

        }
      );
    };
  
    console.log("image: ", image);
  
    return (
      <div className={classes.upload}>
        <img className={classes.image}  src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
        <div className={classes.data}>
            <div className={classes.inputContainer}>
                <h1 className={classes.code}>Codigo de Producto</h1>
                <input className={classes.input_text} ref={inputRef} type="text" />
            </div>
           
            <input className={classes.input_image} type="file" onChange={handleChange} />
            
            <button className={classes.button}  onClick={handleUpload}>Upload</button>
            
            {/* <progress className={classes.progress} value={progress} max="100"/> */}
            <Progress className={classes.progress} type="circle" percent={progress} width={80} strokeColor={"violet"}/>
            <h2 className={classes.message}>{fileState}</h2>

        </div>
       
        
      </div>
    );
  };
export default FileUpload;
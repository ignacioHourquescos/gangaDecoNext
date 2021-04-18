import React, {useState, useRef, useEffect} from 'react';
import { storage, getFirestore } from "./index.js";


const FileUpload = () => {
    const inputRef = useRef();
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
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

              let purchase = {
                url: url
            }
              getFirestore().collection("gangadeco").doc(""+inputRef.current.value).set(purchase)
            });

        }
      );
    };
  
    console.log("image: ", image);
  
    return (
      <div>
        <progress value={progress} max="100" />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        {url}
        <input ref={inputRef} type="text" />
        <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
      </div>
    );
  };
export default FileUpload;
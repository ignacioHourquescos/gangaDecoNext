import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB45Rc8yBcGzTDBnK8kUuKXl_0mnLObFm8",
    authDomain: "gangadeco-35089.firebaseapp.com",
    projectId: "gangadeco-35089",
    storageBucket: "gangadeco-35089.appspot.com",
    messagingSenderId: "885237457069",
    appId: "1:885237457069:web:b3c76ee3f885a740c22624",
    measurementId: "G-WMT25CXXNG"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
}
 
const storage = firebase.storage();

export {storage, firebase as default};


export const getFirebase =()=>{
    return app;
}

export const getFirestore =() =>{
    return firebase.firestore();
}
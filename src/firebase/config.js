import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyCnDMCVyvq8jSBfdzlP6SCCz2QIMYYP0HE",
  
    authDomain: "movies-project-550d6.firebaseapp.com",
  
    projectId: "movies-project-550d6",
  
    storageBucket: "movies-project-550d6.appspot.com",
  
    messagingSenderId: "428253259551",
  
    appId: "1:428253259551:web:49e9e4a8d262182fa6b22a"
  
  };

  
  firebase.initializeApp(firebaseConfig)

  const projectFirestore  = firebase.firestore()

  export { projectFirestore }
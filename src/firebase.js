// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';  // Import Firebase Authentication
import 'firebase/compat/firestore';  // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBdyawRYnAsylo5Yg-qiVyl-Wtooj4ugTg",
    authDomain: "clone-57131.firebaseapp.com",
    projectId: "clone-57131",
    storageBucket: "clone-57131.appspot.com",
    messagingSenderId: "777635556319",
    appId: "1:777635556319:web:8dab3c7d8c2decc4ceb26a",
    measurementId: "G-NTMP74P5RC"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();//database
  const auth=firebase.auth();
  export {db,auth};
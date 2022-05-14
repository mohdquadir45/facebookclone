
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCFAYmOwNAg1i1oPRlmlifyZrBAZxwWtj4",
    authDomain: "facebook-clone-2691c.firebaseapp.com",
    projectId: "facebook-clone-2691c",
    storageBucket: "facebook-clone-2691c.appspot.com",
    messagingSenderId: "177322200161",
    appId: "1:177322200161:web:99cef2c24edcbe68b1ee20",
    measurementId: "G-3Q0QMYHBRQ"
  };
/*  const auth = firebase.auth();

  const provider = new firebase.auth.FacebookAuthProvider();

  const db = firebaseConfig.firestore();

  const storage = firebase.storage();


  export {auth , provider , db, storage}
  */

   const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;
  
 
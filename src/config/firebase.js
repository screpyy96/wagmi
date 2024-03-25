import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBf6ndDcYisK3KX0TPdpSZHpaouc98eQGI",
    authDomain: "plxcoin.firebaseapp.com",
    databaseURL: "https://plxcoin-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "plxcoin",
    storageBucket: "plxcoin.appspot.com",
    messagingSenderId: "110376611927",
    appId: "1:110376611927:web:17068b4b878a9a9392f312",
    measurementId: "G-DBDW7DJ92R"
  };


const app = initializeApp(firebaseConfig);
const firestores = getFirestore(app); // obține instanța Firestore

export default firestores;
import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCX7be7yg7LQ5bLC8P4y3x6hh-vhGAjgs",
  authDomain: "challenge-34c6e.firebaseapp.com",
  projectId: "challenge-34c6e",
  storageBucket: "challenge-34c6e.appspot.com",
  messagingSenderId: "394632828204",
  appId: "1:394632828204:web:c86c42527e082b2b664889"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);;

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
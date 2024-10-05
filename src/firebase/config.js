//firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

//config de firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEqZVsc_W3QnY6djzcreQR9hCoDMTYG-o",
  authDomain: "ecommerce-react-js-ff8e3.firebaseapp.com",
  projectId: "ecommerce-react-js-ff8e3",
  storageBucket: "ecommerce-react-js-ff8e3.appspot.com",
  messagingSenderId: "668925982161",
  appId: "1:668925982161:web:a94a92cc6bce40a42f1cf0",
  measurementId: "G-RTWK8ZF8V9"
};

//inicializacion firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
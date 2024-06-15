// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlptOhdDMly-Lu1cFIA4dPedFA0oteaic",
  authDomain: "todomon-70369.firebaseapp.com",
  projectId: "todomon-70369",
  storageBucket: "todomon-70369.appspot.com",
  messagingSenderId: "673110932858",
  appId: "1:673110932858:web:b6fdd8139fb5d3881ceac3",
  measurementId: "G-GRNQ89FRFC"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); 
const auth = getAuth(firebaseApp);  
const db = getFirestore(firebaseApp);

export { auth , db}
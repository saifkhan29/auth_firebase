import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDElakkhpKGTZ8TxQaje0FE3NDlpvrvJaE",
    authDomain: "react-authentication-05-03-22.firebaseapp.com",
    projectId: "react-authentication-05-03-22",
    storageBucket: "react-authentication-05-03-22.appspot.com",
    messagingSenderId: "712502445067",
    appId: "1:712502445067:web:d024155cac2e097404730e",
    measurementId: "G-BXC2VWGZME"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

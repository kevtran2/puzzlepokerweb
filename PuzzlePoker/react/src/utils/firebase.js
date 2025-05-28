// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByXY3YmNoXxFWo7Gbt7PmE_PnI9iaa4sw",
    authDomain: "puzzlepokerweb.firebaseapp.com",
    projectId: "puzzlepokerweb",
    storageBucket: "puzzlepokerweb.firebasestorage.app",
    messagingSenderId: "47924901011",
    appId: "1:47924901011:web:4f3c5df7bf32fd6e460966",
    measurementId: "G-RR72GBQQJK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnallVF0rhPg6059k4T4didkf4VBnW43w",
    authDomain: "infovita-db.firebaseapp.com",
    projectId: "infovita-db",
    storageBucket: "infovita-db.appspot.com",
    messagingSenderId: "580044415441",
    appId: "1:580044415441:web:e978d6d1a7d9d3f4c600f0",
    measurementId: "G-2LPF0NCGY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

import './AppLogin.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

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
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function Login() {
    const { signin } = useAuth();
    
    const navigate = useNavigate();

    /* eslint-disable no-unused-vars */

    function entrar(event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
    
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            signin(email);
            navigate('/home');
            alert("Você entrou!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Falha ao entrar!");
        });
    };

    /* eslint-enable no-unused-vars */

    return(
        <>
            <div className="login">
                <h1>INFOVITA/ADM</h1>

                <br />
                <h4>Login</h4>
                <form className="login">
                    <input type={'email'} placeholder={'Email'} id={'email'}></input>
                    <br/>
                    <input type={'password'} placeholder={'Senha'} id={'senha'}></input>
                    <hr/>
                    <button onClick={entrar}>Entrar</button>
                </form>
            </div>
        </>
    );
};

export default Login;
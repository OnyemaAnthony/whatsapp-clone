import React from 'react';
import '../css/Login.css'
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";
const Login = () => {
    const  signIn = async ()=>{
     try{
         const result = await auth.signInWithPopup(provider);
         console.log(result);
     }catch (e) {

     }



    }
    return (
        <div className='login'>
            <div className="login_container">
                <img src='whatsapp.png' alt=""/>
                <div className="login_text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
               <Button onClick={signIn}>Sign in With Google</Button>
            </div>

        </div>
    );
};

export default Login;
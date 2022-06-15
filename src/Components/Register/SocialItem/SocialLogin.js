import React from 'react';
import "./SocialLogin.css";
import google from '../../../images/icon/google.png';
import facebook from '../../../images/icon/facebook.png';
import github from '../../../images/icon/GitHub-Mark.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';




const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGithub, user1, error1] = useSignInWithGithub(auth);
    const [signInWithGoogle, user,error] = useSignInWithGoogle(auth);
    let textError;
    const handleGoogleSignIn= () => {
        signInWithGoogle(); 
    }
    if(error1) {
        textError = <div>
            <p>Error : {error1?.message}</p>
           
        </div>
         console.error(error1.message)
    }
    if (user || user1) {
        navigate('/home')
       }
   
    
    return (
        <div>

            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className="div1 bg-primary"></div>
                <p>Or</p>
                <div style={{height: '1px'}} className="div1 bg-primary"></div>
                
            </div>
            <div className="text-center" >
            {textError}
            <button onClick={handleGoogleSignIn} className="btn btn-success  w-50"><img src={google} alt="" /><span className="mx-2">Google SignIn</span></button> <br />
                 <button className="btn btn-success mt-3  w-50"><img src={facebook} alt="" /><span className="mx-2">Facebook SignIn</span></button><br />
                 <button onClick={() =>signInWithGithub()} className="btn btn-success  w-50 mt-3"><img src={github} alt="" /><span className="mx-2 ">Github SignIn</span></button>
                 
            </div>
        </div>
    );
};

export default SocialLogin;
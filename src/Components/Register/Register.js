import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import SocialLogin from './SocialItem/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
const nameRef = useRef('');
const emailRef = useRef('');
const passwordRef = useRef('');
const navigate = useNavigate();
const [agree, setAgree] = useState(false);

const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

if(user){
    navigate('/home');
}

    const handleRegister=e=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        
        if(agree){
            createUserWithEmailAndPassword(email, password,name)
            sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log('Verification send')
        });
        }

       
        

    }
    return (
        <div className="register-container">
            <h3 className='text-center text-primary mb-4'>Please Register!!!!!!</h3>
           <form onSubmit={handleRegister}>
               <input ref={nameRef} type="text" name="name" id="nameId" placeholder="Your Name" />
               <input ref={emailRef} type="email" name="email" id="emailId"  placeholder="Your Email"  required />
               <input ref={passwordRef} type="password" name="password" placeholder="Your Password" required id="passwordId" />
               <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
               <label className={agree ? 'text-primary ps-2': 'ps-2 text-danger'} htmlFor="terms"> Accept genius car conditions</label>
               <input type="submit" value="Register" />
           </form>
           <p>Already Have account?? <Link to="/login"> Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );                    
};

export default Register;
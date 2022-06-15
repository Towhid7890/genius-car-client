import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from "../Register/SocialItem/SocialLogin";
import auth from './../../firebase.init';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
      signInWithEmailAndPassword,
      user,
      error
    ] = useSignInWithEmailAndPassword(auth);
    let textError='';
    if (error) {
     textError = <p>Error: {error.message}</p>;
    
    }
    if(user){
      navigate(from, { replace: true });
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
       
      
    }
  
  return (
    
    <div className="container w-50 mx-auto mt-3">
      <Helmet>
      <title>Login-genius car</title>
    </Helmet>
      <h2 className="text-center text-primary">Please Login!!!!! </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        {textError}
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New to Here?? <Link to="/register">Register here</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;

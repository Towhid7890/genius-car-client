import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import auth from './../../firebase.init';

const AuthRequire = ({children}) => {
    const location = useLocation();
    const[user]= useAuthState(auth);
   
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }

      if(!user.emailVerified){
        console.log("inside verified")
        return <div>
          <h2>Please Verified your email</h2>
        </div>
      }

    
    return children;
};

export default AuthRequire;
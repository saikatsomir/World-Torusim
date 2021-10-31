import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/Hook/useAuth';
import './Login.css'

const googleImg = "https://i.ibb.co/mvVLQYr/google-1.png"

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    // console.log('this is login', location.state.from);
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }
    return (
        <div>
           <button onClick={handleGoogleLogin} className="border-0 login">
           <img width="50px" className="mb-2 " src={googleImg} alt="" />  <span className="text-white fs-3">Sign In With Google</span>
           </button>
        </div>
    );
};

export default Login;
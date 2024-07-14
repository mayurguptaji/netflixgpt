import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidateDate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../utils/firebase';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [ErrorMEssage, setErrorMEssage] = useState(null);
  const email = useRef(null);
  const pswd = useRef(null);
  const navigate = useNavigate();
  const [isSignUp, setisSignUp] = useState(true);

  const toggleSignInForm = () => {
    setisSignUp(!isSignUp);
  }

  const handleSignIn = () => {
    setErrorMEssage(checkValidateDate(email.current.value, pswd.current.value));

    if (ErrorMEssage) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email.current.value, pswd.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMEssage(errorCode);
          // ..
        });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, pswd.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMEssage(errorCode);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className='fixed inset-0 z-0'>
        <img
          alt="alt"
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          className='w-full h-full object-cover'
        />
      </div>

      <form onSubmit={(e) => { e.preventDefault() }} className='relative z-10 text-white p-12 bg-black w-1/5 absolute my-36 mx-auto right-0 left-0 bg-opacity-80'>
        <h1 className='font-bold text-2xl py-4 m-2'>{isSignUp ? "Sign Up" : "Sign In"}</h1>

        {isSignUp && <input type='text' placeholder='Full Name' className='p-3 m-2 w-full bg-gray-700 rounded-lg' />}

        <input ref={email} type='text' placeholder='Email address' className='p-3 m-2 w-full bg-gray-700 rounded-lg' />

        <input ref={pswd} type='password' placeholder='Password' className='p-3 m-2 w-full bg-gray-700 rounded-lg' />

        {(ErrorMEssage != null && ErrorMEssage.length > 0) && <p className='p-3 text-red-500 font-bold'>{ErrorMEssage}</p>}

        <button className='p-3 mx-2 my-4 w-full bg-red-700 rounded-lg' onClick={handleSignIn}>{isSignUp ? "Sign Up" : "Sign In"}</button>

        <div className='w-full text-[14px] mx-2 my-5 cursor-pointer' onClick={toggleSignInForm}>
          {isSignUp ? "New to Netflix? Sign Up Now" : "Already a user? Sign In"}
        </div>
      </form>
    </div>
  )
}

export default Login;

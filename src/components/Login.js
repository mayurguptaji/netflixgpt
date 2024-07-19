import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidateDate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../utils/firebase';
import {LoginPAgeBGImage} from './../utils/constants';

const Login = () => {
  const [ErrorMEssage, setErrorMEssage] = useState(null);
  const email = useRef(null);
  const pswd = useRef(null);
  const [isSignUp, setisSignUp] = useState(true);

  const toggleSignInForm = () => {
    setisSignUp(!isSignUp);
  }

  const handleSignIn = () => {
    const validationError = checkValidateDate(email.current.value, pswd.current.value);
   

    if (validationError) {
      setErrorMEssage(validationError);
      return;
    } else {
      setErrorMEssage(null);
    }

    

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email.current.value, pswd.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
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
          src={LoginPAgeBGImage}
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
          {isSignUp ? "Already a user? Sign In" : "New to Netflix? Sign Up Now"}
        </div>
      </form>
    </div>
  )
}

export default Login;

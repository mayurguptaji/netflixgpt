import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  
    const [isSignIn,setIsSignIn] = useState(true); 

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img alt="alt" src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
      </div>

        <form className='text-white p-12 bg-black  w-1/5 absolute my-36 mx-auto right-0 left-0 bg-opacity-80'>
            <h1 className='font-bold text-2xl py-4 m-2'>{isSignIn?"Sign In":"Sign Up"}</h1>

            {isSignIn && <input type='text' placeholder='Full Name' className='p-3 m-2 w-full bg-gray-700 rounded-lg' />}

            <input type='text' placeholder='Email address' className='p-3 m-2 w-full bg-gray-700 rounded-lg' />
            
            <input type='password' placeholder='Password' className='p-3 m-2 w-full bg-gray-700 rounded-lg' />
            
            <button className='p-3  mx-2 my-4 w-full bg-red-700 rounded-lg'>{isSignIn?"Sign In":"Sign Up"}</button>
            
            <div className='w-full text-[14px] mx-2  my-5 cursor-pointer' onClick={toggleSignInForm}>
       
                {isSignIn?"New to Netflix? Sign Up Now":"Already a user? Sign In"}
        
            </div>
        </form>
    </div>
  )
}

export default Login

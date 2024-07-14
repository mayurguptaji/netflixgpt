import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider , createBrowserRouter  } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from './../utils/firebase';
import {useDispatch} from 'react-redux';
import { addUser,removeUser } from '../utils/UserSlice';


const Body = () => {

    const dispatch = useDispatch();
    

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          dispatch(addUser({email:user.email,uid:user.uid}));
          
        } else {
          dispatch(removeUser());
          
        }
      });


    },[]);

    const appRouter = createBrowserRouter([
        {
            path : '/',
            element : <Login />
        },
        {
            path : '/browse',
            element : <Browse />
        },
    ]);

  return (
    <div>
      <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body

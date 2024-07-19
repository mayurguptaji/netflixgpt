import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider , createBrowserRouter  } from "react-router-dom";


import { addUser,removeUser } from '../utils/UserSlice';


const Body = () => {



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

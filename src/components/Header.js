import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {


  const UserInfo = useSelector((store) => {return store.user});
  console.log(UserInfo);
  debugger;
  const navigate = useNavigate();
  
  const signOutUser = () => {
    signOut(auth).then(() => {

      
      navigate('/');

    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <header className="absolute top-0 left-0 w-full bg-gradient-to-br from-black text-white p-4 z-50 flex justify-between items-center">
      <div>
        <img
          className="w-36"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
      {UserInfo ?<div>
        <button onClick={signOutUser} className="px-4 py-2 bg-red-700 rounded-lg">Sign Out</button>
      </div> : ""}
    </header>
  );
}

export default Header;

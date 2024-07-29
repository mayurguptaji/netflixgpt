import React , {useEffect} from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import {addUser , removeUser} from './../utils/UserSlice';
import {HeaderNetflixLogo} from './../utils/constants';
import {toggleGPTSearchView} from '../utils/GPTSlice';

const Header = () => {


  const UserInfo = useSelector((store) => {return store.user});
  const GPTView = useSelector((store)=> store.gpt.showGPTSearch);

  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutUser = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView(GPTView));
  }

    

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        dispatch(addUser({email:user.email,uid:user.uid}));
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //when component unmounts unsubscribe is called, so event listner onAuthStateChanged is unsubscribed. onAuthStateChanged in firebase returns unsubscribe fn. if we dont use this, everytine onAuthStateChanged gets attached when header loads
    return () => unsubscribe();
  },[]);

  return (
    <header className="absolute top-0 left-0 w-full bg-gradient-to-br from-black text-white p-4 z-50 flex justify-between items-center">
      <div>
        <img
          className="w-36"
          src={HeaderNetflixLogo}
          alt="Netflix Logo"
        />
      </div>
      {UserInfo ?<div>
        <button className='py-2 px-4 m-4 bg-purple-800 text-white rounded-lg' onClick={handleGPTSearch}>GPT Search</button>
        <button onClick={signOutUser} className="px-4 py-2 bg-red-700 rounded-lg">Sign Out</button>
      </div> : ""}
    </header>
  );
}

export default Header;

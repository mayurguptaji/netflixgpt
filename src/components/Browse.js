import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayinMovies from './../hooks/useNowPlayinMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayinMovies();


  

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
    </div>
  )
}

export default Browse

import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayinMovies from './../hooks/useNowPlayinMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from './../hooks/usePopularMovies'

const Browse = () => {

  useNowPlayinMovies();
  usePopularMovies();

  

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
    </div>
  )
}

export default Browse

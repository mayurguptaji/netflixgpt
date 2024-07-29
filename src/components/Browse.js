import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayinMovies from './../hooks/useNowPlayinMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from './../hooks/usePopularMovies'
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const GPTView = useSelector((store)=> store.gpt.showGPTSearch);

  useNowPlayinMovies();
  usePopularMovies();

  

  return (
    <div>
      <Header />
      {GPTView ? <GPTSearch /> :
      <> 
      <MainContainer />
      <SecondaryContainer />
      </>}
      
     
      
    </div>
  )
}

export default Browse

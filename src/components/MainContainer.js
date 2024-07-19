import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';

const MainContainer = () => {
  
  const movies = useSelector(store => store.movie?.nowPlayinMovies); 
  if(movies==null)
    return;

  const MainMovie = movies[0];

    
  return (
    <div>
      <VideoTitle MainMovie = {MainMovie}/>
      <VideoBG MainMovie = {MainMovie}/>
    </div>
  )
}

export default MainContainer

import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {


  const NowPlayinMovies=useSelector(store=>store.movie.nowPlayinMovies);
  const PopularMovies=useSelector(store=>store.movie.popularMovies);

  if(!NowPlayinMovies)
    return;

  if(!PopularMovies)
    return;

  return (
    <div className='  z-10 bg-black'>
      <div className='-mt-[17%] relative z-10'>
        <MovieList Title='Now Playing Movies' MovieData={NowPlayinMovies} />
        <MovieList Title='Popular Movies' MovieData={PopularMovies} />
        <MovieList Title='Horror Playing Movies' MovieData={NowPlayinMovies} />
        <MovieList Title='Continue Watching Playing Movies' MovieData={PopularMovies} />
      </div>
      
    </div>
  )
}

export default SecondaryContainer

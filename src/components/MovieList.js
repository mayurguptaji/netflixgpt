import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({Title,MovieData}) => {
    
    console.log(MovieData);
    if(!MovieData)
        return;

  return (
    <div className='px-6 py-5 '>

    
    <div className='text-3xl font-bold text-white'>
            {Title}
    </div>
    <div className='flex overflow-x-scroll' style={{
        msOverflowStyle: 'none',  /* Hide scrollbar for IE and Edge */
        scrollbarWidth: 'none'    /* Hide scrollbar for Firefox */
      }}>
        <div className='flex'>
        {MovieData.map((movi) => {
            return (
            <MovieCard Movie = {movi} key={movi.id}/>
            )
        } )

        }
            
        </div>
    </div>
    </div>
  )
}

export default MovieList

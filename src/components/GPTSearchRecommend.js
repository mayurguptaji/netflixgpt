import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTSearchRecommend = () => {
  const [movienames, setmovienames] = useState([]);
  const [movienamesArray, setmovienamesArray] = useState([]);

  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, gptmoviesArray } = gpt || {};

  useEffect(() => {
    if (gptMovies && gptmoviesArray) {
      setmovienames(gptMovies);
      setmovienamesArray(gptmoviesArray);
    }
  }, [gptMovies, gptmoviesArray]);

  if (!gptMovies || !gptmoviesArray) {
    return null; // Or you can render a loading indicator or a message
  }

  return (
    <div className='z-10 bg-black'>
    <div className=' -mt-[20%] relative z-20'>
      {movienames.map((muv, inx) => (
        <MovieList key={inx} Title={muv} MovieData={movienamesArray[inx]} />
      ))}
    </div>
    </div>
  );
}

export default GPTSearchRecommend;

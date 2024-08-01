import React, { useRef } from 'react';
import { LoginPAgeBGImage } from './../utils/constants';
import openai from './../utils/openai';
import { TMDB_API_Options } from './../utils/constants';
import { useDispatch } from 'react-redux';
import { addGPTMovieResult } from './../utils/GPTSlice';

const GPTSearchPart = () => {
  const textvalue = useRef(null);
  const precontext = 'Act as a movie recommender system and just give me the name of movies in an array for the following query - ';

  const dispatch = useDispatch();

  const movieSearch = async (moviename) => {
    const movieDataJson = await fetch(`https://api.themoviedb.org/3/search/movie?&query=${moviename}&include_adult=false&language=en-US&page=1`, TMDB_API_Options);
    const movieData = await movieDataJson.json();
    return movieData.results;
  }

  const GPTSearch = async (e) => {
    e.preventDefault();
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: (precontext + textvalue.current.value) }],
      model: 'gpt-3.5-turbo',
    });
    const searchresults = JSON.parse(chatCompletion?.choices[0]?.message?.content);
    if (!searchresults) return;
    console.log(searchresults);

    const SearchResultsTMDB = searchresults.map((movie) => movieSearch(movie));
    const SearchResultsTMDBResolvedPromise = await Promise.all(SearchResultsTMDB);
    console.log(SearchResultsTMDBResolvedPromise);
    dispatch(addGPTMovieResult({ searchresults, SearchResultsTMDBResolvedPromise }));
  }

  return (
    <>
      <div className='relative w-full h-screen'>
        <img
          alt="Background"
          src={LoginPAgeBGImage}
          className='absolute w-full h-full object-cover'
        />
        <div className='flex items-center justify-center h-full w-full absolute top-0 left-0'>
          <form className='bg-black bg-opacity-50 p-8 rounded-lg shadow-lg flex space-x-4 w-[40%]'>
            <input
              ref={textvalue}
              type="text"
              className='p-4 bg-white flex-grow rounded-lg'
              placeholder='Enter your search'
            />
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg' onClick={GPTSearch}>Search</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default GPTSearchPart;

import {TMDB_API_Options} from './../utils/constants';
import { useDispatch } from 'react-redux';
import {addNowPlayinMovies} from './../utils/MovieSlice';
import React, { useEffect } from 'react'

const useNowPlayinMovies = () => {

    const dispatch = useDispatch();
    
    const getNowPlayingMoview = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',TMDB_API_Options);
      const json = await data.json();
     
      dispatch(addNowPlayinMovies(json.results));
    }

    useEffect(()=>{
        getNowPlayingMoview();
    },[])

}

export default useNowPlayinMovies;
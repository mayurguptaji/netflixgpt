import {TMDB_API_Options} from './../utils/constants';
import { useDispatch } from 'react-redux';
import {addNowPopularMovies} from './../utils/MovieSlice';
import React, { useEffect } from 'react'

const usePopularMovies = () => {

    const dispatch = useDispatch();
    
    const getPopularMoview = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',TMDB_API_Options);
      const json = await data.json();
     
      dispatch(addNowPopularMovies(json.results));
    }

    useEffect(()=>{
        getPopularMoview();
    },[])

}

export default usePopularMovies;
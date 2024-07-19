import {TMDB_API_Options,YoutubeVideoURL_NO_KEY} from './../utils/constants';
import {addBGMovie} from './../utils/MovieSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useBGMovieTrailer = (MainMovie) => {

    const dispatch = useDispatch();

    const getMovieTrailerInfo = async () => {
  
      const moviedata =await fetch('https://api.themoviedb.org/3/movie/'+MainMovie.id+'/videos?language=en-US', TMDB_API_Options);
      const moviedatajson = await moviedata.json();
      
      const AllTrailers = moviedatajson.results.filter(video=> video.type == "Trailer")
      const BGTrailer =AllTrailers.length ? AllTrailers[0] : moviedatajson.results[0] ;
      
     
      dispatch(addBGMovie(BGTrailer));
  
    }

    useEffect(()=>{

        getMovieTrailerInfo();
    
      },[])

}

export default useBGMovieTrailer;
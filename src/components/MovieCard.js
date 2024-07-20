import React from 'react';
import {ImgCDNPosterUrl,ImgCDNBackdropUrl} from './../utils/constants';

const MovieCard = ({Movie}) => {
  return (
    <div className='w-48  pr-4 pt-2'>
      <img  src={ImgCDNPosterUrl+Movie.poster_path} />
      {/* <img  src={ImgCDNBackdropUrl+Movie.backdrop_path} /> */}
    </div>
  )
}

export default MovieCard

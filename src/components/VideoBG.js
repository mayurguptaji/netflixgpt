import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useBGMovieTrailer from './../hooks/useBGMovieTrailer';
import {YoutubeVideoURL_NO_KEY} from './../utils/constants';

const VideoBG = ({MainMovie}) => {

  useBGMovieTrailer(MainMovie);  
  const BGMovieTrailerData = useSelector((store)=>store.movie.BGMovieTrialer)

  if(!BGMovieTrailerData)
    return;


    
  return (
    <div>
      <iframe
      className='w-[100%] aspect-video'
       src={YoutubeVideoURL_NO_KEY+BGMovieTrailerData?.key+'?autoplay=1&mute=1&loop=1&controls=0'}
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       
       allowFullScreen>
       </iframe>
    </div>
  )
}

export default VideoBG

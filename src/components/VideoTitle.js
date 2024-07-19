import React from 'react'

const VideoTitle = ({MainMovie}) => {
  return (
    <div className='absolute pt-[20%] px-24 aspect-video bg-gradient-to-r from-black pointer-events-none'>
        <h1 className='text-6xl font-bold text-white'>{MainMovie.original_title}</h1>
        <p className='text-lg py-6 w-1/4 text-white'>{MainMovie.overview}</p>
        <div>
            <button className='bg-gray-500 text-black font-semibold p-4 px-12  text-xl  bg-white rounded-lg hover:bg-opacity-80'> Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle

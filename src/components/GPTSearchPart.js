import React from 'react';
import { LoginPAgeBGImage } from './../utils/constants';

const GPTSearchPart = () => {
  return (
    <>
      <div className='fixed inset-0 z-0'>
        <img
          alt="Background"
          src={LoginPAgeBGImage}
          className='w-full h-full object-cover'
        />
        <div className='fixed inset-0 flex items-center justify-center z-10'>
          <form className='bg-black p-8 rounded-lg shadow-lg flex space-x-4 w-[40%] bg-gradient-to-t from-black ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <input
              type="text"
              className='p-4 bg-white flex-grow rounded-lg'
              placeholder='Enter your search'
            />
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default GPTSearchPart;

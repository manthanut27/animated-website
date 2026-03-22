import React from 'react'
import Video from './Video.jsx'

const HomeTop = () => {
  return (
    <>
      <div className='font-[font1] pt-5 lg:mt-0 mt-72 text-center px-4 lg:px-0' >
        <div className='text-[9vw] lg:text-[4vw] uppercase leading-[14vw] lg:leading-[10vw] justify-center flex items-center text-[#375599]' >
          culture of Japan
        </div>
        <div className='text-[9vw] lg:text-[4vw] uppercase leading-[14vw] lg:leading-[10vw] justify-center flex items-center text-[#375599]'  >
          Explore 
          <div className='h-[14vw] lg:h-[9vw]  rounded-full mt-2 overflow-hidden'>
             <Video />
          </div> the  
        </div>
        <div className='text-[9vw] lg:text-[4vw] uppercase leading-[14vw] lg:leading-[10vw] justify-center flex items-center text-[#375599]' >
          rich culture of Japan with us
        </div>
      </div>
    </>
  )
}

export default HomeTop

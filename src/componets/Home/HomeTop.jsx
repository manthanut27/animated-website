import React from 'react'
import Video from './Video.jsx'

const HomeTop = () => {
  return (
    <>
      <div className='font-[font1] pt-5 text-center' >
        <div className='text-[4vw] uppercase leading-[10vw] text-[] justify-center flex items-center bg-gradient-to-r from-[#6aaed6] to-[#3e4992] bg-clip-text text-transparent' >
          culture of Japan
        </div>
        <div className='text-[4vw] uppercase leading-[10vw] text-[] justify-center flex items-center bg-gradient-to-r from-[#6aaed6] to-[#3e4992] bg-clip-text text-transparent'  >
          Explore the rich 
          <div className='h-[9vw]  rounded-full mt-2 overflow-hidden'>
             <Video />
          </div>culture
        </div>
        <div className='text-[4vw] uppercase leading-[10vw] text-[] justify-center flex items-center bg-gradient-to-r from-[#6aaed6] to-[#3e4992] bg-clip-text text-transparent' >
          of Japan with us
        </div>
      </div>
    </>
  )
}

export default HomeTop

import { Link } from 'react-router-dom'  // ✅ correct for Vite
import React from 'react'

const HomeBottom = () => {
  return (
    <>
    <div className='font-[font1] flex items-center justify-center gap-2 text-[#fe4f52]'>
      <div className='border-3 hover:border-[#ffba78] hover:text-[#ffba78] border-[#fe4f52] h-14 lg:h-20 rounded-full uppercase flex items-center px-4 lg:px-0'>
        <Link className='text-[7vw] lg:text-[5vw] pt-5 p-5 pb-5 leading-none ' to='/Nature'>Nature</Link>
      </div>
      <div className='border-3 hover:border-[#ffba78] hover:text-[#ffba78] border-[#fe4f52] h-14 lg:h-20 rounded-full uppercase flex items-center px-4 lg:px-0'>
         <Link className='text-[7vw] lg:text-[5vw] pt-5 p-5 pb-5 leading-none' to='/Gallery'>Gallery</Link>
      </div>
     
    </div> 
    </>
  )
}

export default HomeBottom
import { Link } from 'react-router-dom'  // ✅ correct for Vite
import React from 'react'

const HomeBottom = () => {
  return (
    <>
    <div className='font-[font1] flex items-center justify-center gap-2 text-[#fe4f52]'>
      <div className='border-3 hover:border-[#ffba78] hover:text-[#ffba78] border-[#fe4f52] rounded-full uppercase items-center '>
        <Link className='text-[3.5vw] px-8 pt-3 leading-[6vw] 'to='/Nature'>Nature</Link>
      </div>
      <div className='border-3 hover:border-[#ffba78] hover:text-[#ffba78] border-[#fe4f52] rounded-full uppercase items-center'>
         <Link className='text-[3.5vw]  px-8 pt-3 leading-[6vw]'to='/Gallery'>Gallery</Link>
      </div>
     
    </div> 
    </>
  )
}

export default HomeBottom
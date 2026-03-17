import React, { useRef } from 'react'

const navbar = () => {

  const navColourRef = useRef(null);
  
  return (
    <div className='flex fixed top-0 w-full items-start justify-between z-4  text-[#3060a3] text-4xl font-[font2] uppercase ' >
      <div >
        <h1 className='font-[font2] p-2 '>Japan</h1>
      </div>
      <div onMouseEnter={()=>{
        navColourRef.current.style.height = "100%"}} 
        onMouseLeave={()=>{
          navColourRef.current.style.height = "0%"
        }}
      className='relative h-14 w-[15vw] bg-[#36569c]'>
        <div ref={navColourRef} className='bg-[#1f79b2] transition-all duration-300 absolute top-0 h-0 w-full ' ></div>
        <div className=' relative ' ></div>
      </div>
    </div>
  )
}

export default navbar

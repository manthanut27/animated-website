import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)

  const [navOpen, setNavOpen] = useContext(NavbarContext)
                  
  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav', {
      display: 'block'
    })
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3
      }
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3
      }
    })
    tl.to('.navlink', {
      opacity: 1
    })
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.navlink', {
      opacity: 0
    })
    tl.to('.fullscreennav', {
      display: 'none',
    })
  }


  useGSAP(function () {
    if (navOpen) {

      gsapAnimation()
    } else {

      gsapAnimationReverse()

    }
  }, [navOpen])

  return (
    <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
      <div className='h-screen w-full fixed'>
        <div className='h-full w-full flex'>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className='relative'>
        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
          <div className=''>
            <div className='lg:w-36 w-24'>
              <h1 className='text-5xl font-[font2]'>Japan</h1>
            </div>
          </div>
          <div onClick={() => {
            setNavOpen(false)
          }} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'>
            <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-white'></div>
            <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-white'></div>

          </div>
        </div>
        <div className='py-35' >
          <div className='link origin-top relative  border-t border-white'>
            <h1 className='font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Nature</h1>
            <div className='moveLink absolute flex top-0 bg-black'>
              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Nature of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar.avif" alt="Project 1" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Nature of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar1.avif" alt="Project 1" />

              </div>
              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Nature of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar.avif" alt="Project 1" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Nature of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar1.avif" alt="Project 1" />

              </div>
            </div>
          </div>
          <div className='link origin-top relative  border-t border-white'>
            <h1 className='font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Gallery</h1>
            <div className='moveLink absolute flex top-0 bg-black'>
              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Gallery of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar2.avif" alt="Project 1" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Gallery of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar3.avif" alt="Project 1" />

              </div>
              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Gallery of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar2.avif" alt="Project 1" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Gallery of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar3.avif" alt="Project 1" />

              </div>
            </div>
          </div>
          <div className='link origin-top relative  border-t border-white'>
            <h1 className='font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>About</h1>
            <div className='moveLink absolute flex top-0 bg-black'>
              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>About of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar4.avif" alt="Project 1" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>About of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar5.avif" alt="Project 1" />

              </div>
              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>About of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar4.avif" alt="Project 1" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>About of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar5.avif" alt="Project 1" />

              </div>
            </div>
          </div>
          <div className='link origin-top relative  border-y border-white'>
            <h1 className='font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Contact</h1>
            <div className='moveLink absolute flex top-0 bg-black'>
              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Contact of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar3.avif" alt="Project 1" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Contact of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar5.avif" alt="Project 1" />

              </div>
              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Gallery of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar3.avif" alt="Project 1" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center uppercase'>Gallery of japan </h2>
                <img className='h-32 rounded-full w-60 shrink-0 object-cover' src="../images/sidebar5.avif" alt="Project 1" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
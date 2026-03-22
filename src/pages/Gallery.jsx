import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP) 
gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {

	const imageDivRef = useRef(null)
	const imageRef = useRef(null)

	const imageArray = [
		'../images/pic1.jpg',
		'../images/pic2.jpg',
		'../images/pic3.jpg',
		'../images/pic4.jpg',
		'../images/pic5.jpg',
		'../images/pic6.jpg',
		'../images/pic7.jpg'
		
]

	useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 18%',
        end: 'bottom -30%',
		//markers: true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div className='parent'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="../images/pic1.jpg" alt="" />
        </div>
        <div className='relative font-[font1] text-[#2176b1]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Tokyo <br /> Japan</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japan’s culture is a powerful blend of deep-rooted tradition and modern innovation. From fast-paced world of cutting-edge technology and pop culture, Japan maintains a unique balance between past and present.
					 </p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>
  )
}

export default Gallery;

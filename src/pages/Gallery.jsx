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
		<div>
			<div className="section1">
				<div ref={imageDivRef} className="absolute overflow-hidden rounded-3xl h-[20vw]  w-[15vw]   top-60 left-[30vw]">
					<img ref={imageRef} className="rounded-3xl object-cover" src="../images/pic1.jpg" />
				</div>
				<div className="relative font-[font1]">
					<div className='flex justify-center text-white pt-[10vh]'>
						<h1
							style={{ marginTop: "50vh" }}
							className="text-[15vw] text-center uppercase leading-[15vw]"
						>
							Tokyo <br /> Japan
						</h1>
					</div>
					<div className=" flex items-end justify-end ">
						<p className="text-4xl w-1/2 text-white font-[font2] mb-22">
							&nbsp;&nbsp;&nbsp;Japan’s culture is a powerful blend of deep-rooted tradition and modern innovation. From fast-paced world of cutting-edge technology and pop culture, Japan maintains a unique balance between past and present.
						</p>
					</div>
				</div>
			</div>
			<div className="section2 hq-screen">

			</div>
		</div>
	);
};

export default Gallery;

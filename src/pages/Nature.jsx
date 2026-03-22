import NatureCard from "../componets/Nature/NatureCard";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Nature = () => {
	const nature = [
		{
			image1: "../images/nature1.jpg",
			image2: "../images/nature2.jpg",
		},
		{
			image1: "../images/nature3.jpg",
			image2: "../images/nature4.jpg",
		},
		{
			image1: "../images/nature5.jpg",
			image2: "../images/nature6.jpg",
		}
	];

	gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase text-[#375599]'>Nature</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {nature.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <NatureCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Nature;

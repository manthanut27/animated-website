import React from 'react'

const NatureCard = (props) => {
    return (
        <div>
            <div className="w-full  h-[700px] mb-4 flex gap-4  ">
                <div className="w-1/2 h-full group relative transition-all rounded-none hover:rounded-[70px] overflow-hidden">
                    <img className="w-full h-full object-cover" src={props.image1} alt="" />
                    <div className="opacity-0 transition-all group-hover:opacity-100  absolute top-0 flex items-center justify-center left-0 h-full w-full  ">
                        <h2 className="uppercase text-6xl font-[font1] border-4 p-2 rounded-full text-white border-white">Nature of japan</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full group relative transition-all rounded-none hover:rounded-[70px] overflow-hidden">
                    <img className="w-full h-full object-cover" src={props.image2} alt="" />
                    <div className="opacity-0 transition-all group-hover:opacity-100  absolute top-0 flex items-center justify-center left-0 h-full w-full  ">
                        <h2 className="uppercase text-6xl font-[font1] border-4 p-2 rounded-full text-white border-white">Nature of japan</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NatureCard

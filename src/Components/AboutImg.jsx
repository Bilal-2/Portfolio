import React, { useState } from 'react'
import { Bilal } from '../images/index'


export default function AboutImg() {
    const [isHover,setIsHover]= useState(false)
    
  return (
    <div>
      <div className={`relative items-center z-20  bg-Navy  aspect-square object-contain h-[13rem] sm:h-[13rem] md:h-[18rem] lg:h-[18rem]  rounded `}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
          <img src={Bilal} alt="Bilal's Image" className=  { `   rounded  aspect-square ${isHover ? ' -translate-x-2 -translate-y-2 transition-transform' : ' transition-transform'}   overflow-hidden bg-slate-200  `} />
          <div className={`absolute h-full w-full  z-30 top-0  rounded  ${isHover ? ' bg-transparent -translate-x-2 -translate-y-2 transition-transform' : 'mix-blend-multiply bg-Green  transition-transform' } `}>

          </div>
          <div className={`absolute h-full w-full  -z-20 top-0  bg-transparent    rounded border-[0.15rem] border-Green ${isHover ? 'translate-x-6 translate-y-6 transition-transform' : 'translate-x-4 translate-y-4 transition-transform'} `}>

          </div>
        </div>
    </div>
  )
}

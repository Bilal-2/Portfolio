import React from 'react'
import { Bilal } from '../images/index'

const About = () => {
  return (
    <div className=' grid grid-cols-2 gap-5'>
      <div>
        <div className=''>
          <h1 className='text-[1.3rem] text-Green font-sf-mono'>
            01. <nobr />
          </h1>
          <h2 className='text-[2rem] text-LightestSlate font-calibri font-semibold'>
            About Me <nobr /> <hr />
          </h2>
        </div>
        <p className='text-[1.3rem] text-Slate font-calibri mt-5'>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012
          when I decided to try editing custom Tumblr themes — turns out
          hacking together a custom reblog button taught me a lot about
          HTML & CSS!
        </p>
        <p className='text-[1.3rem] text-Slate font-calibri mt-3'>
          Fast-forward to today, and I’ve had the privilege of working at
          an advertising agency, a start-up, a huge corporation, and a
          student-led design studio. My main focus these days is building
          accessible, inclusive products and digital experiences at
          Upstatement for a variety of clients.
        </p>
        <p className='text-[1.3rem] text-Slate font-calibri mt-3'>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012
          when I decided to try editing custom Tumblr themes — turns out
          hacking together a custom reblog button taught me a lot about
          HTML & CSS!
        </p>
      </div>
      <div className='relative items-center border border-Green object-contain h-[25rem] rounded translate-x-1'>
        <img src={Bilal} alt="Bilal's Image" className='  bg-grey-50  rounded-lg aspect-square h-[25rem] hover:translate-x-2'/>
        <div className='absolute inline-0  object-fit bg-Green z-10 h-[25rem] opacity-30 top-0 hover:opacity-0 aspect-square rounded w-full'>

        </div>

      </div>
    </div>
  )
}

export default About
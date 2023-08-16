import React from 'react'
import ColumnIcons from '../hoc/ColumnIcons'
import Button from './Button'

const Hero=()=> {
  return (
    <div className='h-screen  px-[2rem] py-[8rem]'>
      <h1 className='text-Green font-sf-mono text-[0.8rem] md:text-[1.3rem] sm:text-[1rem] lg:text-[1.3rem]'>
        Hi, my name is 
      </h1>
      <h2 className='text-LightestSlate p-0 -mb-2 font-calibri text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[5rem]  font-bold'>
        Bilal Subhani.
      </h2>
      <h3 className='text-Slate mb-6 p-0 inline-block font-calibri text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[5rem] sm:leading-[4rem] leading-[2rem] md:leading-[4rem] lg:leading-[4rem] font-bold'>
      I build things for the web.
      </h3>
      <p className='text-Slate font-calibri text-[0.8rem] md:text-[1.3rem] sm:text-[1rem] lg:text-[1.3rem] mb-4 '>
      i’m a software engineer specializing in building (and occasionally<br/>
       designing) exceptional digital experiences. Currently, I’m focused on <br/>
       building accessible, human-centered products.
      </p>

      <Button size={'lg'}>
        Check Out My GitHub!
    </Button>
    </div>
    
  )
}

export default Hero



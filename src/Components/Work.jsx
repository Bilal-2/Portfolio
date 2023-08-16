import React from 'react'

export default function Work() {
  return (
    <div className='h-auto sm:h-screen md:h-screen lg:h-screen px-[2rem] '>

      <div className="flex items-center space-x-4">
        <h1 className="text-[1rem] sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.3rem] text-Green font-sf-mono">
          02.
        </h1>
        <div className="flex items-center space-x-2"> {/* Wrap the About Me heading and hr in a div */}
          <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] text-LightestSlate font-calibri font-semibold">
            My Work
          </h2>
          <hr className="border-t border-LightestNavy h-[2px]  w-[5rem] md:w-[25rem] sm:w-[25rem] lg:w-[25rem]" /> {/* Adjust width and height as needed */}
        </div>
      </div>     
    </div>
  )
}

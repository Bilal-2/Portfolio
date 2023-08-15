import React from 'react'

export default function Work() {
  return (
    <div className='h-screen'>
        <div className="flex items-center space-x-4">
        <h1 className="text-[1.3rem] text-Green font-sf-mono">
          02. <nobr />
        </h1>
        <div className="flex items-center space-x-2"> {/* Wrap the About Me heading and hr in a div */}
          <h2 className="text-[2rem] text-LightestSlate font-calibri font-semibold">
            My Work <nobr />
          </h2>
          <hr className="border-t border-LightestNavy h-[2px] w-[25rem]" /> {/* Adjust width and height as needed */}
        </div>
      </div>      
    </div>
  )
}

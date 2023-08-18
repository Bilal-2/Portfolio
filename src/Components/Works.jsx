import React, { useState } from 'react'
import SectionWithContent from './SectionWithContent';

export default function Works() {
    const sections = [
        {
          name: 'Section 1',
          content: <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more
          Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements
          Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders
          Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>,
        },
        {
          name: 'Section 2',
          content: <p>This is content for Section 2</p>,
        },
        {
            name: 'Section 1',
            content: <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more
            Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements
            Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders
            Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>,
          },
          {
            name: 'Section 2',
            content: <p>This is content for Section 2</p>,
          },
          {
            name: 'Section 1',
            content: <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more
            Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements
            Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders
            Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>,
          },
          {
            name: 'Section 2',
            content: <p>This is content for Section 2</p>,
          },
          {
            name: 'Section 1',
            content: <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more
            Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements
            Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders
            Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>,
          },
          {
            name: 'Section 2',
            content: <p>This is content for Section 2</p>,
          }

        // Add more sections as needed
      ];
    return (
        <div className='h-auto sm:h-screen md:h-screen lg:h-screen px-[2rem] pl-[6rem] '>
            <div className=''>

                <div className="flex items-center space-x-4">
                    <h1 className="text-[1rem] sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.3rem] text-Green font-sf-mono">
                        02.
                    </h1>
                    <div className="flex items-center space-x-2"> {/* Wrap the About Me heading and hr in a div */}
                        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] text-LightestSlate font-calibri font-semibold">
                            Where I've Worked
                        </h2>
                        <hr className="border-t border-LightestNavy h-[2px]  w-[5rem] md:w-[25rem] sm:w-[25rem] lg:w-[25rem]" /> {/* Adjust width and height as needed */}
                    </div>
                </div>
            </div>


            {/* <div className='lg:grid lg:grid-cols-5 lg:gap-6 sm:grid sm:grid-cols-5 sm:gap-6 md:grid md:grid-cols-5 md:gap-6'>
                <div className=' col-start-1 col-span-1 lg:flex flex-col  items-center justify-center w-full border-l-2 border-Slate'> 
                    <div className='lg:h-[4rem] lg:text-[2rem] lg:text-Slate sm:h-[4rem] text-center w-full sm:text-[2rem] sm:text-Slate md:h-[4rem] md:text-[2rem] md:text-Slate border-l-2 border-Green'>
                        Name
                    </div>
                    <div className='lg:h-[4rem] lg:text-[2rem] lg:text-Slate sm:h-[4rem] text-center w-full sm:text-[2rem] sm:text-Slate md:h-[4rem] md:text-[2rem] md:text-Slate'>
                        Name
                    </div>
                    <div className='lg:h-[4rem] lg:text-[2rem] lg:text-Slate sm:h-[4rem] text-center w-full sm:text-[2rem] sm:text-Slate md:h-[4rem] md:text-[2rem] md:text-Slate'>
                        Name
                    </div>

                </div>
                <div className='col-start-2 col-span-4' >for Details</div>


            </div> */}

            <div className="   px-[8rem] py-[4rem] w-[70rem]">
                <SectionWithContent sections={sections} />
            </div>


        </div>
    )
}

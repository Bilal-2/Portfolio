import React, { useState } from 'react';

const SectionWithContent = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className="w-full">
            <div className="lg:grid lg:grid-cols-5   sm:grid sm:grid-cols-5  md:grid md:grid-cols-5  items-start">
                <div className="col-start-1 col-span-1 hidden lg:flex sm:flex md:flex flex-col  items-center  justify-center  ">
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            className={`lg:h-[3rem] lg:text-[1rem] sm:h-[4rem] text-center w-full sm:text-[0.8rem] md:h-[4rem] md:text-[1rem]  font-sf-mono hover:bg-LightNavy 
                            ${index === activeSection ? 'text-Green border-l-2 border-Green transition-colors bg-LightNavy' : 'text-Slate border-l-2 border-Slate'}`}
                            onClick={() => setActiveSection(index)}
                        >
                            {section.company}
                        </button>
                    ))}
                </div>
                {/* for Mobile */}

                <div className="col-start-1 col-span-1 flex lg:hidden sm:hidden md:hidden flex-row  flex-none  mb-6  ">


                    <div className='flex flex-row   flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-Slate scrollbar-track-transparent  scrollbar-thumb-rounded '>


                        {sections.map((section, index) => (
                            <button
                                key={index}
                                className={` text-center w-auto   font-sf-mono hover:bg-LightNavy  flex flex-row flex-none px-3    
                            ${index === activeSection ? 'text-Green border-b-2 border-Green transition-colors bg-LightNavy' : 'text-Slate border-b-2 border-Slate'}`}
                                onClick={() => setActiveSection(index)}
                            >
                                {section.company}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col-start-2 col-span-4 w-full ml-2 lg:ml-8 md:ml-8 sm:ml-8">
                    {/* {sections[activeSection].content} */}

                    <p className='flex flex-row flex-wrap lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.3rem] text-LightestSlate  font-semibold'>
                        {sections[activeSection].role}
                        <span className='text-Green px-1'> @ </span>
                        <h1 className='text-Green'>
                            {sections[activeSection].company}
                        </h1>
                    </p>

                    <div className='text-Slate font-sf-mono flex'>
                        {sections[activeSection].date_of_joining}
                        <span className='px-1'> - </span>
                        {sections[activeSection].date_of_leaving}

                    </div>
                    <ul className=" mt-4 ">
                        {sections[activeSection].content.map((content, i) => (
                            <li key={i} className=" tlg:ext-[1rem] md:ext-[1rem] sm:ext-[0.8rem]   text-Slate flex lg:w-[80%] md:w-3/4 sm:w-[90%] ">
                                <span className="  text-Green mr-3 mt-2 text-[1rem]" style={{ lineHeight: '12px' }}>
                                    ▹
                                </span>
                                <div>
                                    {content}

                                </div>

                            </li>
                        ))}
                    </ul>

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



        </div>
    );
};

export default SectionWithContent;



import React, { useState } from 'react';

const SectionWithContent = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className="w-full">
            <div className="lg:grid lg:grid-cols-5 lg:gap-0 sm:grid sm:grid-cols-5 sm:gap-6 md:grid md:grid-cols-5 md:gap-0">
                <div className="col-start-1 col-span-1 lg:flex flex-col  items-center justify-center w-3/4 ">
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            className={`lg:h-[3rem] lg:text-[1rem] sm:h-[4rem] text-center w-full sm:text-[1.3rem] md:h-[4rem] md:text-[1rem]  font-sf-mono hover:bg-LightNavy
                            ${index === activeSection ? 'text-Green border-l-2 border-Green transition-colors bg-LightNavy' : 'text-Slate border-l-2 border-Slate'}`}
                            onClick={() => setActiveSection(index)}
                        >
                            {section.name}
                        </button>
                    ))}
                </div>
                <div className="col-start-2 col-span-4 w-full">
                {sections[activeSection].content}
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



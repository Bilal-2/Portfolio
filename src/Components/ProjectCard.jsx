import React, { useState } from 'react';
import { IconExternal, IconGitHub } from '../icons';

export default function ProjectCard(props) {
    const [isHover, setIsHover] = useState(false);
    const index = props.index % 2;

    let left = true;

    if (index === 1) {
        left = false;
    }


    function LeftImage() {
        return (
            <div>
                <div className='grid grid-cols-12     place-content-start mt-8 '>



                    <div className='col-start-1 col-span-4 justify-end z-20 relative items-end'>
                        <h1 className='  text-Green font-sf-mono my-3 text-[0.8rem]'>
                            Featured Project
                        </h1>
                        <div className=' mb-5'>
                            <h2 className='  text-LightestSlate font-calibri font-bold text-[1.7rem] hover:text-Green inline-block cursor-pointer ' onClick={() => window.open(props.project.link, 'blank')}>
                                {props.project.name}
                            </h2>
                        </div>
                        <div className='relative  w-full h-1/2'>
                            <p className='absolute  top-0 w-[30rem] h-2/3 left-0 text-Slate bg-LightNavy z-30 py-2 px-4 rounded'>
                                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.

                            </p>
                            <div className='absolute   bottom-0  w-[30rem] h-1/4 left-0 text-LightSlate bg-transparent z-30 py-2 pr-2 rounded'>
                                <ul className='flex justify-start gap-5 bg-inherit font-sf-mono font-bold'>
                                {
                                        props.project.techs.map((tech) => (
                                            <li className='bg-inherit'>
                                                {tech}
                                            </li>
                                        ))


                                    }

                                </ul>

                            </div>
                        </div>
                        {/* <ul className='text-right w-auto  text-Slate '>
                        <li>
                            icon 1
                        </li>
                        <li>
                            icon 2
                        </li>
                    </ul> */}
                        {/* Add your other content here */}
                    </div>
                    <div className='col-start-5 col-span-8 '>
                        <div className='relative  bg-Navy  object-contain h-full w-full rounded  cursor-pointer  ' onClick={() => window.open(props.project.link, 'blank')}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}>
                            <img src={props.project.image} alt={props.project.name} className={`rounded  h-full w-full overflow-hidden bg-slate-200   ${isHover ? 'grayscale-0' : 'grayscale contrast-50 brightness-90'}`} />
                            <div className={`absolute h-full w-full top-0 rounded ${isHover ? 'bg-transparent transition-colors mix-blend-multiply ' : 'mix-blend-multiply  bg-Green  transition-colors opacity-70'}`} />


                        </div>
                    </div>


                </div>


            </div>
        );

    }
    function RightImage() {
        return (
            <div>

                <div className='grid grid-cols-12     place-content-start  mt-8'>


                    <div className='col-start-1 col-span-8 '>
                        <div className='relative  bg-Navy  object-contain h-full w-full rounded  cursor-pointer  ' onClick={() => window.open(props.project.link, 'blank')}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}>
                            <img src={props.project.image} alt={props.project.name} className={`rounded  h-full w-full overflow-hidden bg-slate-200   ${isHover ? 'grayscale-0' : 'grayscale contrast-50 brightness-90'}`} />
                            <div className={`absolute h-full w-full top-0 rounded ${isHover ? 'bg-transparent transition-colors mix-blend-multiply ' : 'mix-blend-multiply  bg-Green  transition-colors opacity-70'}`} />


                        </div>
                    </div>
                    <div className='col-start-9 col-span-4 justify-end z-20 relative items-end'>
                        <h1 className='text-right  text-Green font-sf-mono my-3 text-[0.8rem]'>
                            Featured Project
                        </h1>
                        <div className='text-right mb-5'>
                            <h2 className='text-right  text-LightestSlate font-calibri font-bold text-[1.7rem] hover:text-Green inline-block cursor-pointer ' onClick={() => window.open(props.project.link, 'blank')}>
                                {props.project.name}
                            </h2>
                        </div>
                        <div className='relative text-right w-full h-1/2'>
                            <p className='absolute  top-0 w-[30rem] h-2/3 right-0 text-Slate bg-LightNavy z-30 py-2 px-4 rounded'>
                                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.

                            </p>
                            <div className='absolute   bottom-0   w-[20rem] h-1/4 right-0 text-LightSlate bg-transparent z-30 py-2 pl-4 rounded'>
                                <ul className='flex  gap-5 justify-end bg-inherit font-sf-mono font-bold'>
                                    {
                                        props.project.techs.map((tech) => (
                                            <li className='bg-inherit'>
                                                {tech}
                                            </li>
                                        ))


                                    }
                                    

                                </ul>

                            </div>
                        </div>
                        <ul className='text-right w-auto  text-Slate flex gap-5 justify-end  '>
                            <li>
                                Github Icon
                            </li>
                            <li>
                                External Icon
                            </li>
                        </ul>
                        {/* Add your other content here */}
                    </div>


                </div>


            </div>
        );

    }



    return (
        <div>
            {left ? <LeftImage /> : <RightImage />}






        </div>
    );
}

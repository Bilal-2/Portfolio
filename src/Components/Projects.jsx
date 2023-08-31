// import React from 'react'
// import ProjectCard from './ProjectCard'
// import { Project1 } from '../images'

// export default function Projects() {
//     const projects = [
//         {
//             name: 'Decora',
//             image: Project1,
//             link: 'www.google.com'


//         },
//         {
//             name: 'Dcor',
//             image: Project1,
//             link: 'www.google.com'


//         },

//     ]



//     return (
//         <div className='h-auto sm:h-screen md:h-screen lg:h-screen px-[2rem] lg:pl-[9rem] md:pl-[6rem]  sm:pl-[3rem] mt-[2rem] '>
//             <div className=''>

//                 <div className="flex items-center space-x-4">
//                     <h1 className="text-[1rem] sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.3rem] text-Green font-sf-mono">
//                         03.
//                     </h1>
//                     <div className="flex items-center space-x-2"> {/* Wrap the About Me heading and hr in a div */}
//                         <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] text-LightestSlate font-calibri font-semibold">
//                             Some Things I've Built
//                         </h2>
//                         <hr className="border-t border-LightestNavy h-[2px]   md:w-[25rem] sm:w-[15rem] lg:w-[25rem]" /> {/* Adjust width and height as needed */}
//                     </div>
//                 </div>
//             </div>

//             {
//                 projects.map((project, index) => (
//                     <ProjectCard key={index} project={project} index={index} />
//                 ))
//             }


//         </div>
//     )
// }


import React from 'react';
import ProjectCard from './ProjectCard';
import { Project1 } from '../images';

export default function Projects() {
    const projects = [
        {
            name: 'Decora',
            image: Project1,
            link: 'www.google.com',
            techs: ['react','typescript','javascript', 'tailwind', 'AR','Three.Js']
        },
        {
            name: 'Dcor',
            image: Project1,
            link: 'www.google.com',
            techs: ['react','typescript','javascript', 'tailwind', 'AR','Three.Js']

        },
    ];

    return (
        <div className='h-auto sm:h-screen md:h-screen lg:h-screen px-[2rem]  mt-[2rem] '>
            <div className=''>

                 <div className="flex items-center space-x-4">
                     <h1 className="text-[1rem] sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.3rem] text-Green font-sf-mono">
                         03.
                     </h1>
                     <div className="flex items-center space-x-2"> {/* Wrap the About Me heading and hr in a div */}
                         <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] text-LightestSlate font-calibri font-semibold">
                             Some Things I've Built
                         </h2>
                         <hr className="border-t border-LightestNavy h-[2px]   md:w-[25rem] sm:w-[15rem] lg:w-[25rem]" /> {/* Adjust width and height as needed */}
                     </div>
                 </div>
             </div>

                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
        </div>
    );
}

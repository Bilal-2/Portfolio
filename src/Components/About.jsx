import AboutImg from './AboutImg'

const About = () => {

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

  return (
    <div className='h-auto sm:h-screen md:h-screen lg:h-screen px-[2rem] '>

      <div className="flex items-center space-x-4">
        <h1 className="text-[1rem] sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.3rem] text-Green font-sf-mono">
          01.
        </h1>
        <div className="flex items-center space-x-2"> {/* Wrap the About Me heading and hr in a div */}
          <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] text-LightestSlate font-calibri font-semibold">
            About Me 
          </h2>
          <hr className="border-t border-LightestNavy h-[2px]  w-[5rem] md:w-[25rem] sm:w-[25rem] lg:w-[25rem]" /> {/* Adjust width and height as needed */}
        </div>
      </div>
      <div className=' sm:grid sm:grid-cols-5 sm:gap-5 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5'>
        <div className=' col-start-1 col-span-3'>
          <div className=''>



          </div>
          <p className='text-[0.8rem] md:text-[1.3rem] sm:text-[1rem] lg:text-[1.3rem] text-Slate font-calibri mt-5'>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about
            HTML & CSS!
          </p>
          <p className='text-[0.8rem] md:text-[1.3rem] sm:text-[1rem] lg:text-[1.3rem] text-Slate font-calibri mt-3'>
            Fast-forward to today, and I’ve had the privilege of working at
            an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p className='text-[0.8rem] md:text-[1.3rem] sm:text-[1rem] lg:text-[1.3rem] text-Slate font-calibri mt-3'>
            
          </p>
          <p className='text-[0.8rem] md:text-[1.3rem] sm:text-[1rem] lg:text-[1.3rem] text-Slate font-calibri mt-3'>
            Here are a few technologies I’ve been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-x-10 gap-y-4 p-0 mt-4 overflow-hidden list-none">
            {skills.map((skill, i) => (
              <li key={i} className="relative sm:mb-4 md:mb-4 lg:mb-4 pl-5 font-mono text-[0.8rem] md:text-[1.3rem] sm:text-[1rem] lg:text-[1.3rem] text-Slate">
                <span className="absolute left-0 text-Green text-[0.8rem] md:text-[1.3rem] sm:text-[1rem] lg:text-[1.3rem]" style={{ lineHeight: '12px' }}>
                  ▹
                </span>
                {skill}
              </li>
            ))}
          </ul>

        </div>

        <div className='pt-[2rem] p-5 col-start-4 col-span-2'>


          <AboutImg />
        </div>

      </div>
    </div>
  )
}

export default About



import React from 'react'
import Button from './Button'
import{IconHex,IconLogo} from '../icons/index'

export default function Navbar() {
    const handleClick = () => {
        console.log('Button clicked!');
        // Add your desired functionality here
      };
    //   const Logo = (
    //     <div className="logo relative group">
          
    //         <div className=" top-0 left-0 z-[-1]   ">
    //           {/* <IconHex /> */}
    //         </div>
    //         <div className="relative z-10 h-[3rem] ">
    //            {/* <IconLogo />  */}
    //         </div>
          
          
    //     </div>
    //   );
    return (
        <nav className='flex items-center  bg-transparent top-0 sticky px-8 w-full opacity-100 pt-4 '>
            <div className=' w-full text-[2rem] text-Green items-center bg-transparent'>
                B
            </div>
           

                <Button onClick={handleClick}>
                    Resume
                </Button>

            

        </nav>
    )
}



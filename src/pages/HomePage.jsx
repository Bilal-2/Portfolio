import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Work from '../Components/work'

export default function HomePage() {
    return (
        <div>

            <div className="grid grid-cols-12  ">




                <div className="text-Green col-start-1 col-span-2 p-8  ">
                    <div className='fixed'>

                        hello
                        <br />
                        my
                        <br />
                        friend
                        <br />
                    </div>
                </div>


                <div className=" col-start-3 col-end-11 ">
                    <Hero />
                    <About />
                    <Work/>
                </div>


                <div className="text-Green col-start-11 col-span-2 p-8   ">
                    <div className='fixed right-8 bottom-8'>

                        hello
                        <br />
                        my
                        <br />
                        friend
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

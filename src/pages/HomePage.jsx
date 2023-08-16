import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Work from '../Components/work'

export default function HomePage() {
    return (
        <div>

            <div className="md:grid lg:grid md:grid-cols-12 lg:grid-cols-12 sm:grid sm:grid-cols-12 ">




                <div className="text-Green col-start-1 col-span-1 p-8 hidden md:block lg:block sm:block ">
                    <div className='fixed'>

                        hello
                        <br />
                        my
                        <br />
                        friend
                        <br />
                    </div>
                </div>


                <div className=" col-start-2   col-end-12 ">
                    <Hero />
                    <About />
                    <Work/>
                   
                </div>


                <div className="text-Green col-start-12 col-span-1 p-8 hidden md:block lg:block  sm:block ">
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



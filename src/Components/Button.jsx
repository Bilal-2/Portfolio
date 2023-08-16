import React from 'react';

const Button = ({ children,size, ...props }) => {
    return (
        <>

            <div className=' '>
                {
                    size==='lg'? <button
                        className="bg-Transparent  text-secondary  font-sf-mono font-semibold py-2 px-4 border-[1px] 
                        rounded text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] border-Green 
                        hover:shadow-btn hover:-translate-x-1 hover:-translate-y-1 sm:py-4 sm:px-8 md:py-4 md:px-8 lg:py-4 lg:px-8"
                        {...props}
                    >
                        {children}
                    </button>:<button
                        className="bg-Transparent text-secondary  font-sf-mono font-semibold py-2 px-4 border-[1px]
                         rounded text-[0.8rem] sm:text-[1rem] md:text-[1rem] border-Green hover:shadow-btn hover:-translate-x-1 hover:-translate-y-1 
                         "
                        {...props}
                    >
                        {children}
                    </button>
                }

                
            </div>
        </>
    );
};

export default Button;



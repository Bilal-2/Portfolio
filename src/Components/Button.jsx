import React from 'react';

const Button = ({ children,size, ...props }) => {
    return (
        <>

            <div className=' '>
                {
                    size==='lg'? <button
                        className="bg-Transparent  text-secondary  font-sf-mono font-semibold py-4 px-8 border-[1px] rounded border-Green hover:shadow-btn hover:-translate-x-1 hover:-translate-y-1 "
                        {...props}
                    >
                        {children}
                    </button>:<button
                        className="bg-Transparent text-secondary  font-sf-mono font-semibold py-2 px-4 border-[1px] rounded border-Green hover:shadow-btn hover:-translate-x-1 hover:-translate-y-1 "
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



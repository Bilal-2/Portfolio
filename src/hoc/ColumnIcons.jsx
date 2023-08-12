// import React from 'react'

// const ColumnIcons=(Component) => 
//     function HOC(){
//         return (
//             <div className="grid grid-cols-12 ">
//               <div className="text-Green col-start-1 col-span-2 ">
//                 hello
//                 <br/>
//                 my
//                 <br />
//                 friend
//                 <br />
//               </div>
//               <div className="h-screen col-start-3 col-end-11">
//                 <Component />
//               </div>

//               <div className="text-Green col-start-11 place-items-center col-span-2 h-full " >
//                 hello
//                 <br/>
//                 my
//                 <br />
//                 friend
//                 <br />
//               </div>
//             </div>
//           );

//         }
  
 



// export default ColumnIcons;


import React from 'react';

const ColumnIcons = (Component) => () => (
  <div className=" overflow-hidden">
    
    <div className="h-screen  overflow-y-auto">
      <Component />
    </div>
    
  </div>
);

export default ColumnIcons;

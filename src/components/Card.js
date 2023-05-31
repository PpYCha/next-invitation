"use client";
import { ninongs } from "@/data";
import React, { useState } from "react";

const Card = ({ godParents }) => {
  return (
    <>
      {godParents.map((item) => (
        <div className="text-center" key={item.id}>
          {item.imageUrl ? (
            <img
              className="mx-auto mb-4 w-32 rounded-lg"
              src={item.imageUrl}
              alt={item.name}
            />
          ) : (
            <svg
              className="mx-auto mb-4 w-32 rounded-lg"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <h5 className="mb-2 text-sm font-medium leading-tight">
            {item.name}
          </h5>
        </div>
      ))}
    </>
  );
};
// const Card = ({ godParents }) => {
//   return (
//     <>
//       {godParents.map((item) => (
//         <div className="bg-white rounded shadow-md hover-lg" key={item.id}>
//           <div className="flex items-center space-x-4">
//             {item.imageUrl ? (
//               <img
//                 className="w-20 h-20 rounded-full ring-2 ring-gray-300 mt-2"
//                 src={item.imageUrl}
//                 alt="dp"
//               />
//             ) : (
//               <svg
//                 className="w-20 h-20 text-gray-400 rounded-full ring-2 ring-gray-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             )}
//             <div className="font-bold">{item.name}</div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

export default Card;

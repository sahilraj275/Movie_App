// import React from "react";
// import { Link } from "react-router-dom";
// import noimage from "/noimage.jpg";

// function HorizontalCard({ data }) {
//   return (
//     <div className="w-[100%] h-[53vh]  mb-8 p-3 no-scrollbar  flex overflow-x-auto space-x-5 scrollbar-hide">
//       {data.length > 0 ? (
//         data.map((d, i) => (
//           <Link
//             to={`/${d.media_type}/details/${d.id}`}
//             className="min-w-[200px] bg-zinc-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
//             key={i}
//           >
//             <img
//               className="w-full h-[60%] object-cover rounded-t-lg"
//               src={
//                 d.backdrop_path || d.poster_path
//                   ? `https://image.tmdb.org/t/p/original${
//                       d.backdrop_path || d.poster_path
//                     }`
//                   : noimage
//               }
//               alt=""
//             />
//             <div className="p-4 h-[40%] overflow-y-hidden">
//               <h1 className="text-lg font-semibold text-white truncate">
//                 {d.original_title || d.title || d.name || d.original_name}
//               </h1>
//               <p className="text-sm text-gray-300 mt-2">
//                 {d.overview.slice(0, 55)}...
//                 <span className="text-[#6556CD] cursor-pointer hover:text-blue-200">
//                   more
//                 </span>
//               </p>
//             </div>
//           </Link>
//         ))
//       ) : (
//         <h1 className="text-3xl mt-5  text-white font-black text-center">
//           Nothing to show
//         </h1>
//       )}
//     </div>
//   );
// }

// export default HorizontalCard;

import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

function HorizontalCard({ data }) {
  return (
    <div className="w-full h-[30vh]  sm:h-[53vh] mb-8 p-3 no-scrollbar flex overflow-x-auto space-x-3 sm:space-x-5 scrollbar-hide">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            className="min-w-[160px] sm:min-w-[200px] bg-zinc-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            key={i}
          >
            <img
              className="w-full h-[50%] sm:h-[60%] object-cover rounded-t-lg"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original${
                      d.backdrop_path || d.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="p-3 sm:p-4 h-[50%] sm:h-[40%] overflow-y-hidden">
              <h1 className="text-base sm:text-lg font-semibold text-white truncate">
                {d.original_title || d.title || d.name || d.original_name}
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">
                {d.overview.slice(0, 55)}...
                <span className="text-[#6556CD] cursor-pointer hover:text-blue-200">
                  more
                </span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-2xl sm:text-3xl mt-5 text-white font-black text-center">
          Nothing to show
        </h1>
      )}
    </div>
  );
}

export default HorizontalCard;

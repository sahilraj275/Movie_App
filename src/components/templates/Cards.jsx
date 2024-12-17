// import React from "react";
// import { Link } from "react-router-dom";
// import noimage from "/noimage.jpg";

// function Cards({ data, title }) {
//   console.log(title);
//   console.log(data);
//   return (
//     <div className="flex flex-wrap w-full h-full p-[5%]  justify-center">
//       {data.map((c, i) => (
//         <Link
//           to={`/${c.media_type || title}/details/${c.id}`}
//           className="w-[30vh]  relative mr-[5%] mb-[5%]"
//           key={i}
//         >
//           <img
//             className="h-[45vh] w-[35vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
//             src={
//               c.poster_path || c.backdrop_path || c.profile_path
//                 ? `https://image.tmdb.org/t/p/original/${
//                     c.poster_path || c.backdrop_path || c.profile_path
//                   }`
//                 : noimage
//             }
//             alt=""
//           />
//           <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
//             {c.name || c.title || c.original_name || c.original_title}
//           </h1>

//           {c.vote_average && (
//             <div className="rounded-full absolute right-[-10%] bottom-[25%] text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center">
//               {(c.vote_average * 10).toFixed()}
//               <sup>%</sup>
//             </div>
//           )}
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Cards;

import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap w-full h-full p-[5%] justify-center">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="w-[30vh] sm:w-[20vh] lg:w-[30vh] relative mr-[5%] mb-[5%] sm:mr-[2%] sm:mb-[2%]"
          key={i}
        >
          <img
            className="h-[45vh] w-[35vh] sm:h-[35vh] sm:w-[25vh] lg:h-[45vh] lg:w-[35vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-2xl sm:text-lg lg:text-2xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="rounded-full absolute right-[-10%] sm:right-[-5%] bottom-[25%] text-xl sm:text-base lg:text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] sm:w-[6vh] sm:h-[6vh] lg:w-[8vh] lg:h-[8vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;

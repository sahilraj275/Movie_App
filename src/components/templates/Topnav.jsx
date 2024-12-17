// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import noimage from "/noimage.jpg";
// import axios from "../../utils/axios";

// function Topnav() {
//   const [query, setquery] = useState("");
//   const [search, setsearch] = useState([]);

//   const getSearches = async () => {
//     try {
//       const { data } = await axios.get(`/search/multi?query=${query}`);
//       setsearch(data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getSearches();
//   }, [query]);

//   return (
//     <div className="w-full h-[10vh]  relative  ml-[15%]  flex justify-start items-center space-x-4">
//       <i className="text-2xl  text-zinc-400 ri-search-2-line"></i>
//       <input
//         onChange={(e) => setquery(e.target.value)}
//         value={query}
//         className="w-[50%] p-3 text-xl  outline-none border-none text-zinc-200 bg-transparent"
//         type="text"
//         placeholder="Search anything"
//       />
//       {query.length > 0 && (
//         <i
//           onClick={() => setquery("")}
//           className="text-2xl cursor-pointer text-zinc-400 ri-close-large-fill"
//         ></i>
//       )}
//       {query.length > 0 && (
//         <div className="w-[50%] max-h-[50vh] rounded left-0 bg-zinc-200 top-[100%] absolute mt-1 overflow-auto z-10">
//           {search.map((s, k) => (
//             <Link
//               key={k}
//               to={`/${s.media_type}/details/${s.id}`}
//               className="w-full font-semibold hover:bg-zinc-300 duration-300 hover:text-black text-zinc-600 p-4 flex items-center border-b-2 border-zinc-100"
//             >
//               <img
//                 className="w-20 h-20 object-cover mr-4 rounded-md"
//                 src={
//                   s.backdrop_path || s.profile_path
//                     ? `https://image.tmdb.org/t/p/original/${
//                         s.backdrop_path || s.profile_path
//                       } `
//                     : noimage
//                 }
//                 alt=""
//               />
//               <span>
//                 {s.original_title || s.title || s.name || s.original_name}
//               </span>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Topnav;

// responsive codes

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
import axios from "../../utils/axios";

function Topnav() {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative ml-0 md:ml-[15%] flex items-center space-x-2 md:space-x-4 px-3">
      <i className="text-xl md:text-2xl text-zinc-400 ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-full md:w-[50%] p-2 md:p-3 text-base md:text-xl outline-none border-none text-zinc-200 bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-xl md:text-2xl cursor-pointer text-zinc-400 ri-close-large-fill"
        ></i>
      )}
      {query.length > 0 && (
        <div className="w-full md:w-[50%] max-h-[50vh] rounded left-0 bg-zinc-200 top-[100%] absolute mt-1 overflow-auto z-10">
          {search.map((s, k) => (
            <Link
              key={k}
              to={`/${s.media_type}/details/${s.id}`}
              className="w-full font-semibold hover:bg-zinc-300 duration-300 hover:text-black text-zinc-600 p-2 md:p-4 flex items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-16 h-16 md:w-20 md:h-20 object-cover mr-3 md:mr-4 rounded-md"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      } `
                    : noimage
                }
                alt=""
              />
              <span>
                {s.original_title || s.title || s.name || s.original_name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Topnav;

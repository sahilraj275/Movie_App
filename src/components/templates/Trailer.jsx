// import React from "react";
// import ReactPlayer from "react-player";
// import { useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import NotFound from "./NotFound";

// function Trailer() {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const category = pathname.includes("movie") ? "movie" : "tv";
//   const ytvideos = useSelector((state) => state[category].info.videos);

//   return (
//     <div className="absolute bg-[rgba(0,0,0,0.8)] z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
//       <Link
//         onClick={() => navigate(-1)}
//         className="ri-close-fill absolute right-[5%] top-[5%] text-3xl text-white hover:text-[#6556CD]  cursor-pointer transition-transform transform hover:scale-110"
//       ></Link>
//       {ytvideos ? (
//         <ReactPlayer
//           controls
//           height={500}
//           width={900}
//           url={`https://www.youtube.com/watch?v=${ytvideos.key}`}
//         />
//       ) : (
//         <NotFound />
//       )}
//     </div>
//   );
// }

// export default Trailer;

import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

function Trailer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideos = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center p-2">
      <Link
        onClick={() => navigate(-1)}
        className="ri-close-fill absolute right-[5%] top-[5%] text-2xl sm:text-3xl text-white hover:text-[#6556CD] cursor-pointer transition-transform transform hover:scale-110"
      ></Link>
      {ytvideos ? (
        <ReactPlayer
          controls
          width="70vw"
          height="100vh"
          style={{
            maxWidth: "90vw", // Limits player width for mobile screens
            maxHeight: "50vh", // Limits player height for mobile screens
          }}
          url={`https://www.youtube.com/watch?v=${ytvideos.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Trailer;

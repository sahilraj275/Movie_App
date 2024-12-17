// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { asyncloadmovie, removemovie } from "../store/actions/movieAction";
// import {
//   Link,
//   Outlet,
//   useLocation,
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// import Loading from "./templates/Loading";
// import HorizontalCard from "../components/templates/HorizontalCard";

// function MovieDetails() {
//   const { id } = useParams();
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { info } = useSelector((state) => state.movie);

//   console.log(info);

//   useEffect(() => {
//     dispatch(asyncloadmovie(id));
//     return () => {
//       dispatch(removemovie());
//     };
//   }, [dispatch, id]);

//   return info ? (
//     <div
//       style={{
//         background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="w-full relative h-[180vh]  px-[10%]"
//     >
//       <nav className="w-[40vh] h-[10vh]  flex items-center gap-5 text-xl text-zinc-100">
//         <Link
//           onClick={() => navigate(-1)}
//           className="ri-arrow-left-line text-3xl text-[#6556CD] cursor-pointer transition-transform transform hover:scale-110"
//         ></Link>

//         <a
//           className="flex items-center ml-[4%] justify-center w-[4vh] h-[4vh] bg-yellow-500 rounded-full transition-transform transform hover:scale-105"
//           target="_blank"
//           rel="noopener noreferrer"
//           href={`https://www.imdb.com/title/${
//             info?.externalid?.imdb_id || ""
//           }/`}
//         >
//           <img src="/imdb-icon.svg" alt="IMDb" className="w-[4vh] h-[4vh]" />
//         </a>

//         <a
//           className="text-[#6556CD] hover:text-white p-2 rounded-full transition-all duration-200 transform hover:scale-105"
//           target="_blank"
//           rel="noopener noreferrer"
//           href={`https://www.wikidata.org/wiki/${info?.externalid?.wikidata_id}`}
//         >
//           <img
//             src="/Wikidata-logo.svg"
//             alt="wikidata"
//             className="w-[4.5vh] h-[4.5vh] mt-[1vh]"
//           />
//         </a>

//         <a
//           className="flex items-center justify-center text-[#6556CD] p-2 rounded-full transition-all duration-200 transform hover:scale-105"
//           style={{ width: "4.5vh", height: "4.5vh", fontSize: "4.5vh" }}
//           target="_blank"
//           rel="noopener noreferrer"
//           href={info?.detail?.homepage}
//         >
//           <i className="ri-external-link-fill"></i>
//         </a>
//       </nav>

//       <div className="w-full flex ml-[10vh] items-center  ">
//         <div className="flex flex-col  ">
//           <div className="flex w-[100%] ">
//             <img
//               className="h-[50vh] w-[50vh] mt-5  object-cover  shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
//               src={`https://image.tmdb.org/t/p/original/${
//                 info.detail.poster_path || info.detail.backdrop_path
//               }`}
//               alt=""
//             />
//             <div className="content flex mt-2 flex-col ml-[8%] ">
//               <h1 className="text-5xl font-black text-white">
//                 {info.detail.name ||
//                   info.detail.title ||
//                   info.detail.original_name ||
//                   info.detail.original_title}

//                 <small className="text-2xl font-bold text-zinc-300">
//                   ({info.detail.release_date.split("-")[0]})
//                 </small>
//               </h1>

//               <div className="flex  items-center mt-2  w-full text-white gap-5 ">
//                 <span className="rounded-full right-[-10%] bottom-[25%] text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center">
//                   {(info.detail.vote_average * 10).toFixed()}
//                   <sup>%</sup>
//                 </span>
//                 <h1 className="font-semibold">User Score</h1>
//                 <h1 className="text-white font-semibold">
//                   {info.detail.release_date}
//                 </h1>
//                 <h1 className="font-semibold">
//                   {info.detail.genres.map((g) => g.name).join(", ")}
//                 </h1>
//                 <h1 className="font-semibold">{info.detail.runtime}min</h1>
//               </div>

//               <h1 className="text-zinc-200 italic  font-semibold text-xl">
//                 {info.detail.tagline}
//               </h1>

//               <h1 className="text-zinc-200 mt-3 font-semibold text-xl">
//                 Overview
//               </h1>
//               <p className="text-zinc-100 italic">
//                 {info.detail.overview.slice(0, 300)}
//               </p>

//               <h1 className="text-zinc-200 mt-3 font-semibold text-xl">
//                 Languages
//               </h1>
//               <p className="text-white mb-5">
//                 {info.translations.slice(0, 12).join(", ")}
//               </p>

//               <Link
//                 to={`${pathname}/trailer`}
//                 className="text-white w-[25%] font-bold flex items-center p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500"
//               >
//                 <i className="ri-play-circle-fill text-3xl mr-2"></i>
//                 Play Trailer
//               </Link>
//             </div>
//           </div>

//           {/* Available on Platforms Section */}
//           <div className="flex flex-col  w-[45%] mt-10 mb-5  gap-3">
//             {info.watchProviders?.flatrate &&
//               info.watchProviders.flatrate.length > 0 && (
//                 <div className="flex items-center">
//                   <h1 className="text-white font-semibold text-base bg-gray-800 px-3 py-1 rounded-md shadow-md">
//                     Available on Platforms
//                   </h1>
//                   <div className="flex items-center ml-3">
//                     {info.watchProviders?.flatrate?.map((w, i) => (
//                       <img
//                         title={w.provider_name}
//                         className="w-[4.5vh] h-[4.5vh] cursor-pointer object-cover rounded-md mx-1 transition-transform transform hover:scale-105"
//                         key={i}
//                         src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
//                         alt=""
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//             {/* Available on Rent Section */}
//             {info.watchProviders?.rent &&
//               info.watchProviders.rent.length > 0 && (
//                 <div className="flex items-center">
//                   <h1 className="text-white font-semibold text-base bg-gray-800 px-3 py-1 rounded-md shadow-md">
//                     Available on Rent
//                   </h1>
//                   <div className="flex items-center ml-3">
//                     {info.watchProviders?.rent?.map((w, i) => (
//                       <img
//                         title={w.provider_name}
//                         className="w-[4.5vh] h-[4.5vh]  cursor-pointer object-cover rounded-md mx-1 transition-transform transform hover:scale-105"
//                         key={i}
//                         src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
//                         alt=""
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//             {/* Available to Buy Section */}
//             {info.watchProviders?.buy && info.watchProviders.buy.length > 0 && (
//               <div className="flex items-center">
//                 <h1 className="text-white font-semibold text-base bg-gray-800 px-3 py-1 rounded-md shadow-md">
//                   Available to Buy
//                 </h1>
//                 <div className="flex items-center ml-3">
//                   {info.watchProviders?.buy?.map((w, i) => (
//                     <img
//                       title={w.provider_name}
//                       className="w-[4.5vh] h-[4.5vh] cursor-pointer object-cover rounded-md mx-1 transition-transform transform hover:scale-105"
//                       key={i}
//                       src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
//                       alt=""
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="relative">
//         <div className="w-1 h-8 absolute top-[3px] rounded-md left-2  justify-center items-center bg-yellow-300"></div>
//         <h1 className="text-white text-3xl mt-8 mb-4 font-black ml-5">
//           More like this{" "}
//         </h1>
//       </div>

//       <HorizontalCard
//         data={
//           info.recommendations.length > 0 ? info.recommendations : info.similar
//         }
//       />
//       <Outlet />
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default MovieDetails;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./templates/Loading";
import HorizontalCard from "../components/templates/HorizontalCard";
import noimage from "/noimage.jpg"; // Add a default image path

function MovieDetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full relative h-auto lg:h-[180vh] px-[5%] lg:px-[10%] py-5 lg:py-0"
    >
      {/* Navigation Section */}
      <nav className="w-full lg:w-[40vh] h-[10vh] flex items-center gap-5 text-lg lg:text-xl text-zinc-100 mb-4 lg:mb-0">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-2xl lg:text-3xl text-[#6556CD] cursor-pointer transition-transform transform hover:scale-110"
        ></Link>
        <a
          className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-lg transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.imdb.com/title/${
            info?.externalid?.imdb_id || ""
          }/`}
        >
          <img src="/imdb-icon.svg" alt="IMDb" className="w-8 h-8" />
        </a>

        <a
          className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.wikidata.org/wiki/${info?.externalid?.wikidata_id}`}
        >
          <img src="/Wikidata-logo.svg" alt="wikidata" className="w-8 h-8" />
        </a>

        <a
          className="flex items-center justify-center rounded-lg w-10 h-10 bg-gray-800 text-[#6556CD] rounded-full transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          href={info?.detail?.homepage}
        >
          <i className="ri-external-link-fill text-xl"></i>
        </a>
      </nav>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:ml-[10vh]">
        <img
          className="w-[80vw] h-[50vh] lg:w-[50vh] lg:h-[75vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={
            info.detail.poster_path || info.detail.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${
                  info.detail.poster_path || info.detail.backdrop_path
                }`
              : noimage
          }
          alt=""
        />
        <div className="content flex flex-col lg:ml-[8%] w-full lg:w-auto mt-5 lg:mt-0">
          <h1 className="text-3xl lg:text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="block lg:inline text-lg lg:text-2xl font-bold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex flex-wrap items-center mt-2 text-white gap-2 lg:gap-5">
            <span className="rounded-full text-lg lg:text-xl font-semibold bg-yellow-600 text-white w-[6vh] lg:w-[8vh] h-[6vh] lg:h-[8vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="font-semibold">User Score</h1>
            <h1 className="font-semibold">{info.detail.release_date}</h1>
            <h1 className="font-semibold">
              {info.detail.genres.map((g) => g.name).join(", ")}
            </h1>
            <h1 className="font-semibold">{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-zinc-200 italic font-semibold text-lg lg:text-xl mt-2">
            {info.detail.tagline}
          </h1>

          <h1 className="text-zinc-200 font-semibold text-lg lg:text-xl mt-3">
            Overview
          </h1>
          <p className="text-zinc-100 italic text-sm lg:text-base">
            {info.detail.overview.slice(0, 300)}
          </p>

          <h1 className="text-zinc-200 font-semibold text-lg lg:text-xl mt-3">
            Languages
          </h1>
          <p className="text-white mb-5 text-sm lg:text-base">
            {info.translations.slice(0, 12).join(", ")}
          </p>

          <Link
            to={`${pathname}/trailer`}
            className="text-white w-[50%] lg:w-[25%] font-bold flex items-center p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <i className="ri-play-circle-fill text-2xl lg:text-3xl mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="flex flex-col w-full lg:w-[45%] mt-5 lg:mt-10 gap-3">
        {info.watchProviders?.flatrate &&
          info.watchProviders.flatrate.length > 0 && (
            <div className="flex items-center">
              <h1 className="text-white font-semibold text-sm lg:text-base bg-gray-800 px-2 py-1 rounded-md shadow-md">
                Available on Platforms
              </h1>
              <div className="flex items-center ml-3">
                {info.watchProviders?.flatrate?.map((w, i) => (
                  <img
                    title={w.provider_name}
                    className="w-[3vh] lg:w-[4.5vh] h-[3vh] lg:h-[4.5vh] cursor-pointer object-cover rounded-md mx-1 transition-transform transform hover:scale-105"
                    key={i}
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          )}
        {/* Additional sections for Rent and Buy are similar */}
      </div>

      {/* More Like This Section */}
      <div className="relative mt-5">
        <div className="w-1 h-8 absolute top-[3px] rounded-md left-2 bg-yellow-300"></div>
        <h1 className="text-white text-xl lg:text-3xl mt-8 mb-4 font-black ml-5">
          More like this
        </h1>
      </div>

      <HorizontalCard
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}

export default MovieDetails;

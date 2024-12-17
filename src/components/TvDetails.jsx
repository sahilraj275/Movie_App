// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { asysyncloadtv, removetv } from "../store/actions/tvAction";
// import { asyncloadtv, removetv } from "../store/actions/tvAction";
// import {
//   Link,
//   Outlet,
//   useLocation,
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// import Loading from "./templates/Loading";
// import HorizontalCard from "../components/templates/HorizontalCard";

// function TvDetails() {
//   const { id } = useParams();
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { info } = useSelector((state) => state.tv);

//   console.log(info);

//   useEffect(() => {
//     dispatch(asyncloadtv(id));
//     return () => {
//       dispatch(removetv());
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
//       className="w-full relative h-[275vh]  px-[10%]"
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
//               className="h-[55vh] w-[55vh] mt-5  object-cover  shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
//               src={`https://image.tmdb.org/t/p/original/${
//                 info.detail.poster_path || info.detail.backdrop_path
//               }`}
//               alt=""
//             />
//             <div className="content  w-[120vh] flex mt-2 flex-col ml-[8%] ">
//               <h1 className="text-5xl font-black text-white">
//                 {info.detail.name ||
//                   info.detail.title ||
//                   info.detail.original_name ||
//                   info.detail.original_title}

//                 <small className="text-2xl font-bold text-zinc-300">
//                   ({info.detail.first_air_date.split("-")[0]})
//                 </small>
//               </h1>

//               <div className="flex  items-center mt-2  w-[120vh] text-white gap-5 ">
//                 <div className="flex items-center ">
//                   <span className="rounded-full right-[-10%] bottom-[25%] text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center">
//                     {(info.detail.vote_average * 10).toFixed()}
//                     <sup>%</sup>
//                   </span>
//                   <h1 className="font-semibold m-1 ">User Score</h1>
//                 </div>

//                 <h1 className="text-white items-center flex font-semibold">
//                   {info.detail.first_air_date}
//                 </h1>
//                 <h1 className="font-semibold">
//                   {info.detail.genres
//                     .slice(0, 2) // Limit to the first two genres
//                     .map((g) => g.name)
//                     .join(", ")}
//                 </h1>

//                 <h1 className="font-semibold">
//                   {info.detail.episode_run_time}mins
//                 </h1>

//                 <h1 className="text-zinc-200 italic  font-semibold text-xl">
//                   {info.detail.number_of_seasons + " "}
//                   Seasons
//                 </h1>
//               </div>
//               <h1 className="text-zinc-200 italic mt-3 font-semibold text-xl">
//                 {info.detail.tagline}
//               </h1>

//               <h1 className="text-zinc-200 mt-3 font-black text-xl">
//                 Overview
//               </h1>
//               <p className="text-zinc-100 italic">
//                 {info.detail.overview.slice(0, 300)}
//               </p>

//               <h1 className="text-zinc-200 mt-3 font-black text-xl">
//                 Languages
//               </h1>
//               <p className="text-white mb-5 ">
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
//             <div className="flex items-center">
//               <h1 className="text-white font-semibold text-base bg-gray-800 px-3 py-1 rounded-md shadow-md">
//                 Available on Platforms
//               </h1>
//               <div className="flex items-center ml-3">
//                 {info.watchProviders?.flatrate?.map((w, i) => (
//                   <img
//                     title={w.provider_name}
//                     className="w-[4.5vh] h-[4.5vh] cursor-pointer object-cover rounded-md mx-1 transition-transform transform hover:scale-105"
//                     key={i}
//                     src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
//                     alt=""
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Available on Rent Section */}
//             <div className="flex items-center">
//               <h1 className="text-white font-semibold text-base bg-gray-800 px-3 py-1 rounded-md shadow-md">
//                 Available on Rent
//               </h1>
//               <div className="flex items-center ml-3">
//                 {info.watchProviders?.rent?.map((w, i) => (
//                   <img
//                     title={w.provider_name}
//                     className="w-[4.5vh] h-[4.5vh]  cursor-pointer object-cover rounded-md mx-1 transition-transform transform hover:scale-105"
//                     key={i}
//                     src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
//                     alt=""
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Available to Buy Section */}
//             <div className="flex items-center">
//               <h1 className="text-white font-semibold text-base bg-gray-800 px-3 py-1 rounded-md shadow-md">
//                 Available to Buy
//               </h1>
//               <div className="flex items-center ml-3">
//                 {info.watchProviders?.buy?.map((w, i) => (
//                   <img
//                     title={w.provider_name}
//                     className="w-[4.5vh] h-[4.5vh] cursor-pointer object-cover rounded-md mx-1 transition-transform transform hover:scale-105"
//                     key={i}
//                     src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
//                     alt=""
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <hr className="mt-10 mb-5   border-none h-[2px] bg-zinc-500" />

//       <div className="relative">
//         <div className="w-1 h-8 absolute top-[3px] rounded-md left-2  justify-center items-center bg-yellow-300"></div>
//         <h1 className="text-white text-3xl mt-8 mb-4 font-black ml-5">
//           Seasons
//         </h1>
//       </div>

//       <div className="w-full flex overflow-x-scroll scrollbar-hide no-scrollbar overflow-y-hidden mb-5 p-5 space-x-4">
//         {info.detail.seasons.map((s, i) => (
//           <div key={i} className="flex-shrink-0 w-[30vh]">
//             <img
//               className="h-[45vh] w-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
//               src={`https://image.tmdb.org/t/p/original${s.poster_path}`}
//               alt=""
//             />
//             <h1 className="text-lg font-semibold mb-5 text-white truncate">
//               {s.original_title || s.title || s.name || s.original_name}
//             </h1>
//           </div>
//         ))}
//       </div>

//       <hr className="mt-5 mb-5  border-none h-[2px] bg-zinc-500" />

//       <div className="relative  mt-10 ">
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

// export default TvDetails;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./templates/Loading";
import HorizontalCard from "../components/templates/HorizontalCard";

function TvDetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
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
      className="w-full relative h-auto px-5 md:px-[10%] py-5"
    >
      {/* Navigation */}
      <nav className="flex items-center gap-4 text-lg text-zinc-100 mb-4">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-3xl text-[#6556CD] cursor-pointer transition-transform transform hover:scale-110"
        ></Link>
        <a
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 rounded-full transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.imdb.com/title/${
            info?.externalid?.imdb_id || ""
          }/`}
        >
          <img
            src="/imdb-icon.svg"
            alt="IMDb"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </a>
        <a
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.wikidata.org/wiki/${info?.externalid?.wikidata_id}`}
        >
          <img
            src="/Wikidata-logo.svg"
            alt="Wikidata"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </a>
        <a
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-[#6556CD] rounded-full transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          href={info?.detail?.homepage}
        >
          <i className="ri-external-link-fill text-xl sm:text-2xl"></i>
        </a>
      </nav>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <img
          className="w-full max-w-[300px] lg:max-w-[270px] object-cover shadow-lg mb-5 lg:mb-0"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt="Poster"
        />
        <div className="flex flex-col text-white space-y-2 lg:ml-8">
          <h1 className="text-2xl md:text-6xl font-bold">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="block text-lg md:text-2xl text-zinc-300">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <span className="bg-yellow-600 text-white font-semibold w-10 h-10 flex items-center justify-center rounded-full">
                {(info.detail.vote_average * 10).toFixed()}
                <sup>%</sup>
              </span>
              <span>User Score</span>
            </span>
            <span>{info.detail.first_air_date}</span>
            <span>
              {info.detail.genres
                .slice(0, 2)
                .map((g) => g.name)
                .join(", ")}
            </span>
            <span>{info.detail.episode_run_time} mins</span>
            <span className="italic">
              {info.detail.number_of_seasons} Seasons
            </span>
          </div>

          <p className="italic text-zinc-200 mt-2">{info.detail.tagline}</p>

          <div>
            <h2 className="font-bold text-xl">Overview</h2>
            <p className="italic text-zinc-100">
              {info.detail.overview.slice(0, 300)}
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl">Languages</h2>
            <p className="text-white">
              {info.translations.slice(0, 5).join(", ")}
            </p>
          </div>

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
      <div className="mt-8">
        <div className="text-white font-bold mb-2">Available on Platforms</div>
        <div className="flex flex-wrap gap-2">
          {info.watchProviders?.flatrate?.map((w, i) => (
            <img
              key={i}
              title={w.provider_name}
              className="w-10 h-10 object-cover rounded-md transition-transform transform hover:scale-105"
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              alt=""
            />
          ))}
        </div>
      </div>

      {/* <div className="mt-8 bg-rose-300">
        <h2 className="text-white text-2xl font-black ml-1">Seasons</h2>
        <div className="flex overflow-x-auto space-x-4 mt-4">
          {info.detail.seasons.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[150px]   h-[40vh] md:w-[200px]"
            >
              <img
                className="h-[150px] md:h-[200px] w-full object-fill shadow-lg"
                src={`https://image.tmdb.org/t/p/original${s.poster_path}`}
                alt={s.name}
              />
              <h3 className="text-sm font-semibold text-white truncate mt-2">
                {s.name}
              </h3>
            </div>
          ))}
        </div>
      </div> */}
      <div className="mt-4 md:mt-8  py-4 md:py-8">
        <h2 className="text-white text-2xl font-black ml-1">Seasons</h2>
        <div className="flex overflow-x-auto space-x-4 mt-4 scrollbar-hide no-scrollbar">
          {info.detail.seasons.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[150px] h-[30vh] md:w-[200px] md:h-[40vh]"
            >
              <img
                className="h-[160px] md:h-[200px] w-full object-fill shadow-lg"
                src={`https://image.tmdb.org/t/p/original${s.poster_path}`}
                alt={s.name}
              />
              <h3 className="text-sm font-semibold text-white truncate mt-2">
                {s.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-8">
        <h2 className="text-white text-2xl font-black ml-1">More like this</h2>
        <HorizontalCard
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
        <Outlet />
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default TvDetails;

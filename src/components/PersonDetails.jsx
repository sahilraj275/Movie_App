// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { asyncloadperson, removeperson } from "../store/actions/personAction";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import Loading from "./templates/Loading";
// import HorizontalCard from "../components/templates/HorizontalCard";
// import Dropdown from "./templates/Dropdown";

// function PersonDetails() {
//   const { id } = useParams();
//   const [category, setcategory] = useState("movie");
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { info } = useSelector((state) => state.person);

//   useEffect(() => {
//     dispatch(asyncloadperson(id));
//     return () => {
//       dispatch(removeperson());
//     };
//   }, [dispatch, id]);

//   return info ? (
//     <div className="w-screen min-h-screen overflow-x-hidden bg-gray-900 text-gray-200 p-8">
//       {/* Navigation */}
//       <nav className="flex items-center gap-6 text-xl text-indigo-400">
//         <Link
//           onClick={() => navigate(-1)}
//           className="ri-arrow-left-line text-3xl cursor-pointer transform transition-transform duration-200 hover:scale-110"
//         ></Link>
//       </nav>

//       <div className="flex mt-8 ml-[4%]">
//         {/* Poster Section */}
//         <div className="w-1/5 mr-8 p-4 bg-gray-800 rounded-lg shadow-lg">
//           <img
//             className="w-full h-auto object-cover rounded-lg shadow-md"
//             src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
//             alt=""
//           />
//           <div className="flex justify-around items-center gap-4 mt-5">
//             {[
//               { icon: "ri-instagram-line", url: info.externalid?.instagram_id },
//               { icon: "ri-twitter-x-fill", url: info.externalid?.twitter_id },
//               { icon: "ri-facebook-fill", url: info.externalid?.facebook_id },
//             ].map((social, index) => (
//               <a
//                 key={index}
//                 className="text-indigo-400 transition-all duration-200 hover:text-white transform hover:scale-110"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={`https://www.${social.url}`}
//               >
//                 <i className={social.icon}></i>
//               </a>
//             ))}
//             <a
//               className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full transition-all duration-200 hover:scale-110"
//               target="_blank"
//               rel="noopener noreferrer"
//               href={`https://www.imdb.com/name/${info.externalid?.imdb_id}`}
//             >
//               <img src="/imdb-icon.svg" alt="IMDb" className="w-8 h-8" />
//             </a>
//           </div>
//           <div className="mt-8 space-y-2">
//             <h2 className="text-lg font-semibold text-indigo-400">
//               Person Info
//             </h2>
//             <p>
//               <strong>Also Known As:</strong>{" "}
//               {info.detail.also_known_as.join(", ")}
//             </p>
//             <p>
//               <strong>Known for:</strong> {info.detail.known_for_department}
//             </p>
//             <p>
//               <strong>Gender:</strong>{" "}
//               {info.detail.gender === 2 ? "Male" : "Female"}
//             </p>
//             <p>
//               <strong>Born:</strong> {info.detail.birthday}{" "}
//               {info.detail.place_of_birth}
//             </p>
//             {info.detail.deathday && (
//               <p>
//                 <strong>Died:</strong> {info.detail.deathday}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Details Section */}
//         <div className="w-3/5 ml-8">
//           <h1 className="text-5xl font-extrabold text-indigo-300 mb-4">
//             {info.detail.name}
//           </h1>

//           <h2 className="text-2xl text-indigo-400 mt-5 mb-3">Biography</h2>
//           <p className="text-md italic mb-6">{info.detail.biography}</p>

//           <h2 className="text-3xl font-bold text-indigo-400 mt-8 mb-5">
//             Known For
//           </h2>
//           <HorizontalCard data={info.combined_credits.cast} />

//           <div className="flex justify-between mt-10 mb-6">
//             <h2 className="text-2xl font-semibold">Acting</h2>
//             <Dropdown
//               title="Category"
//               options={["tv", "movie"]}
//               func={(e) => setcategory(e.target.value)}
//             />
//           </div>

//           <ul className="space-y-3 max-h-[50vh] overflow-y-auto bg-gray-800 rounded-lg p-5 shadow-lg">
//             {info[`${category}Credits`].cast.map((c, i) => (
//               <li
//                 key={i}
//                 className="hover:text-indigo-300 transition-all duration-200"
//               >
//                 <Link to={`/${category}/details/${c.id}`}>
//                   <span className="text-lg font-medium">
//                     {c.name || c.title || c.original_name || c.original_title}
//                   </span>
//                   {c.character && (
//                     <span className="block text-sm text-gray-500">
//                       Character name: {c.character}
//                     </span>
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default PersonDetails;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./templates/Loading";
import HorizontalCard from "../components/templates/HorizontalCard";
import Dropdown from "./templates/Dropdown";

function PersonDetails() {
  const { id } = useParams();
  const [category, setcategory] = useState("movie");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [dispatch, id]);

  return info ? (
    <div className="w-screen min-h-screen overflow-x-hidden bg-gray-900 text-gray-200 p-4 sm:p-8">
      {/* Navigation */}
      <nav className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl text-indigo-400">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-2xl sm:text-3xl cursor-pointer transform transition-transform duration-200 hover:scale-110"
        ></Link>
      </nav>

      <div className="flex flex-col sm:flex-row mt-8">
        {/* Poster Section */}
        <div className="w-full sm:w-1/5 sm:mr-8 p-4 bg-gray-800 rounded-lg shadow-lg mb-6 sm:mb-0">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <div className="flex justify-around items-center gap-4 mt-5">
            {[
              { icon: "ri-instagram-line", url: info.externalid?.instagram_id },
              { icon: "ri-twitter-x-fill", url: info.externalid?.twitter_id },
              { icon: "ri-facebook-fill", url: info.externalid?.facebook_id },
            ].map((social, index) => (
              <a
                key={index}
                className="text-indigo-400 transition-all duration-200 hover:text-white transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.${social.url}`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
            <a
              className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full transition-all duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/name/${info.externalid?.imdb_id}`}
            >
              <img src="/imdb-icon.svg" alt="IMDb" className="w-8 h-8" />
            </a>
          </div>
          <div className="mt-8 space-y-2">
            <h2 className="text-lg font-semibold text-indigo-400">
              Person Info
            </h2>
            <p>
              <strong>Also Known As:</strong>{" "}
              {info.detail.also_known_as.join(", ")}
            </p>
            <p>
              <strong>Known for:</strong> {info.detail.known_for_department}
            </p>
            <p>
              <strong>Gender:</strong>{" "}
              {info.detail.gender === 2 ? "Male" : "Female"}
            </p>
            <p>
              <strong>Born:</strong> {info.detail.birthday}{" "}
              {info.detail.place_of_birth}
            </p>
            {info.detail.deathday && (
              <p>
                <strong>Died:</strong> {info.detail.deathday}
              </p>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full sm:w-3/5 sm:ml-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-indigo-300 mb-4">
            {info.detail.name}
          </h1>

          <h2 className="text-xl sm:text-2xl text-indigo-400 mt-5 mb-3">
            Biography
          </h2>
          <p className="text-sm sm:text-md italic mb-6">
            {info.detail.biography}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mt-8 mb-5">
            Known For
          </h2>
          <HorizontalCard data={info.combined_credits.cast} />

          <div className="flex justify-between mt-10 mb-6">
            <h2 className="text-lg sm:text-2xl font-semibold">Acting</h2>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <ul className="space-y-3 max-h-[50vh] overflow-y-auto bg-gray-800 rounded-lg p-3 sm:p-5 shadow-lg">
            {info[`${category}Credits`].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-indigo-300 transition-all duration-200"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span className="text-base sm:text-lg font-medium">
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  {c.character && (
                    <span className="block text-sm text-gray-500">
                      Character name: {c.character}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default PersonDetails;

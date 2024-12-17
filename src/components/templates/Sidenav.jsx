// import React from "react";
// import { Link } from "react-router-dom";

// function Sidenav() {
//   return (
//     <div className="w-[19%] h-full border-r-[1px] border-zinc-400 p-6">
//       <h1 className="text-2xl text-white font-bold">
//         <i className="text-[#6556CD] ri-tv-fill mr-[5px]"></i>
//         <span className="text-2xl">Movie-App</span>
//       </h1>
//       <nav className="flex flex-col mb-2 text-zinc-400 text-xl gap-3">
//         <h1 className="text-white font-semibold text-xl mt-10 mb-5">
//           New feeds
//         </h1>
//         <Link
//           to="/trending"
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
//         >
//           <i className="ri-fire-fill"></i> Trending
//         </Link>
//         <Link
//           to="/popular"
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
//         >
//           <i className="ri-bard-fill"></i> Popular
//         </Link>
//         <Link
//           to="/movies"
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
//         >
//           <i className="ri-movie-fill"></i> Movies
//         </Link>
//         <Link
//           to="tvshows"
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
//         >
//           <i className="ri-tv-2-fill"></i> Tv Shows
//         </Link>
//         <Link
//           to="/people"
//           className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
//         >
//           <i className="ri-user-2-fill"></i> People{" "}
//         </Link>
//       </nav>
//       <hr />

//       <nav className="flex flex-col text-zinc-400 text-xl gap-2">
//         <h1 className="text-white font-semibold text-xl mt-10 mb-5">
//           Website Information
//         </h1>
//         <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
//           <i className="ri-information-fill"></i> About
//         </Link>
//         <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
//           <i className="ri-contacts-fill"></i> Contact
//         </Link>
//       </nav>
//     </div>
//   );
// }

// export default Sidenav;

// responsive
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button for Mobile */}
      <div className="md:hidden fixed top-6 right-4 z-20">
        <button onClick={toggleMenu} className="text-2xl text-white">
          <i className={`ri-${isOpen ? "close-line" : "menu-line"}`}></i>
        </button>
      </div>

      {/* Sidebar - Visible on Larger Screens, Responsive on Small Screens */}
      <div
        className={`fixed md:relative top-0 left-0 w-[70%] md:w-[100%] h-full bg-gray-900 border-r-[1px] border-zinc-400 p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-10 md:translate-x-0`}
      >
        <h1 className="text-2xl text-white font-bold">
          <i className="text-[#6556CD] ri-tv-fill mr-[5px]"></i>
          <span className="text-2xl">Movie-App</span>
        </h1>
        <nav className="flex flex-col mb-2 text-zinc-400 text-xl gap-3">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            New feeds
          </h1>
          <Link
            to="/trending"
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-fire-fill"></i> Trending
          </Link>
          <Link
            to="/popular"
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-bard-fill"></i> Popular
          </Link>
          <Link
            to="/movies"
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-movie-fill"></i> Movies
          </Link>
          <Link
            to="/tvshows"
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-tv-2-fill"></i> TV Shows
          </Link>
          <Link
            to="/people"
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-user-2-fill"></i> People
          </Link>
        </nav>
        <hr />
        <nav className="flex flex-col text-zinc-400 text-xl gap-2">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            Website Information
          </h1>
          <Link
            to="/about"
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-information-fill"></i> About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-contacts-fill"></i> Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidenav;

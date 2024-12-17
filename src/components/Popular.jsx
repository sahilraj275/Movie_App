// import React, { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Topnav from "../components/templates/Topnav";
// import Dropdown from "../components/templates/Dropdown";
// import axios from "../utils/axios";
// import Cards from "./templates/Cards";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "./templates/Loading";

// function Popular() {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState("movie");
//   const [popular, setPopular] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   document.title = "Movie | Popular" + " " + category;

//   const fetchPopularCards = useCallback(async () => {
//     if (popular.length >= 50) {
//       setHasMore(false);
//       return;
//     }

//     try {
//       // Adjust endpoint based on category selection
//       const endpoint =
//         category === "all"
//           ? "/trending/all/day"
//           : `/${category}/popular?page=${page}`;

//       const { data } = await axios.get(endpoint);
//       if (data.results.length > 0) {
//         setPopular((prevPopular) => [...prevPopular, ...data.results]);
//         setPage((prevPage) => prevPage + 1);

//         if (popular.length + data.results.length >= 50) {
//           setHasMore(false);
//         }
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching popular data:", error);
//     }
//   }, [category, page, popular.length]);

//   const refreshHandler = () => {
//     setPopular([]);
//     setPage(1);
//     setHasMore(true);
//   };

//   useEffect(() => {
//     refreshHandler();
//   }, [category]);

//   useEffect(() => {
//     fetchPopularCards();
//   }, [fetchPopularCards]);

//   return popular.length > 0 ? (
//     <div className="w-screen h-full">
//       <div className="w-full px-[5%] flex items-center justify-between">
//         <h1 className="text-2xl font-semibold text-zinc-300 p-3">
//           <i
//             onClick={() => navigate(-1)}
//             className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
//           ></i>
//           Popular
//         </h1>
//         <small className="text-sm text-zinc-500">({category})</small>

//         <div className="flex items-center w-[100%]">
//           <Topnav />
//           <Dropdown
//             title="Category"
//             options={["movie", "tv", "all"]}
//             value={category} // Set dropdown to show selected category
//             func={(e) => setCategory(e.target.value)} // Update category state on change
//           />
//         </div>
//       </div>

//       <InfiniteScroll
//         dataLength={popular.length}
//         next={fetchPopularCards}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//       >
//         <Cards data={popular} title={category} />
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default Popular;

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/templates/Topnav";
import Dropdown from "../components/templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./templates/Loading";

function Popular() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Movie | Popular" + " " + category;

  const fetchPopularCards = useCallback(async () => {
    if (popular.length >= 50) {
      setHasMore(false);
      return;
    }

    try {
      // Adjust endpoint based on category selection
      const endpoint =
        category === "all"
          ? "/trending/all/day"
          : `/${category}/popular?page=${page}`;

      const { data } = await axios.get(endpoint);
      if (data.results.length > 0) {
        setPopular((prevPopular) => [...prevPopular, ...data.results]);
        setPage((prevPage) => prevPage + 1);

        if (popular.length + data.results.length >= 50) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching popular data:", error);
    }
  }, [category, page, popular.length]);

  const refreshHandler = () => {
    setPopular([]);
    setPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  useEffect(() => {
    fetchPopularCards();
  }, [fetchPopularCards]);

  return popular.length > 0 ? (
    <div className="w-screen h-full">
      {/* Container for header and dropdown */}
      <div className="w-full px-[5%] flex flex-col sm:flex-row items-start sm:items-center justify-between sm:space-x-4">
        <h1 className="text-2xl font-semibold text-zinc-300 p-3 flex items-center sm:ml-0 ml-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
          ></i>
          Popular
        </h1>
        <small className="text-sm text-zinc-500 ml-16 sm:ml-0">{category}</small>

        {/* Topnav and Dropdown Container */}
        <div className="flex flex-col sm:flex-row items-center w-full mt-3 sm:mt-0">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            value={category} // Set dropdown to show selected category
            func={(e) => setCategory(e.target.value)} // Update category state on change
          />
        </div>
      </div>

      {/* Infinite scroll for fetching more popular cards */}
      <InfiniteScroll
        dataLength={popular.length}
        next={fetchPopularCards}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;

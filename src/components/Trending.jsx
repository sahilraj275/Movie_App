// import React, { useEffect, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import Topnav from "../components/templates/Topnav";
// import Dropdown from "../components/templates/Dropdown";
// import axios from "../utils/axios";
// import Cards from "./templates/Cards";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "./templates/Loading";

// function Trending() {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState("all");
//   const [duration, setDuration] = useState("day");
//   const [trending, setTrending] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchTrendingCards = useCallback(async () => {
//     if (trending.length >= 50) {
//       setHasMore(false);
//       return;
//     }

//     try {
//       const { data } = await axios.get(
//         `/trending/${category}/${duration}?page=${page}`
//       );

//       if (data.results.length > 0) {
//         setTrending((prevTrending) => [...prevTrending, ...data.results]);
//         setPage((prevPage) => prevPage + 1);
//         if (trending.length + data.results.length >= 50) {
//           setHasMore(false);
//         }
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching trending data:", error);
//     }
//   }, [category, duration, page, trending.length]);

//   const refreshHandler = () => {
//     setTrending([]);
//     setPage(1);
//     setHasMore(true);
//   };

//   useEffect(() => {
//     refreshHandler();
//   }, [category, duration]);

//   useEffect(() => {
//     fetchTrendingCards();
//   }, [fetchTrendingCards]);

//   return trending.length > 0 ? (
//     <div className="w-screen h-full">
//       <div className="w-full px-[5%] flex items-center justify-between">
//         <h1 className="text-2xl font-semibold text-zinc-300 p-3">
//           <i
//             onClick={() => navigate(-1)}
//             className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
//           ></i>
//           Trending
//         </h1>
//         <small className="text-sm text-zinc-500">({category})</small>

//         <div className="flex items-center w-full">
//           <Topnav />
//           <Dropdown
//             title="Category"
//             options={["movie", "tv", "all"]}
//             func={(e) => setCategory(e.target.value)}
//           />
//           <div className="w-2"></div>
//           <Dropdown
//             title="Duration"
//             options={["week", "day"]}
//             func={(e) => setDuration(e.target.value)}
//           />
//         </div>
//       </div>

//       <InfiniteScroll
//         dataLength={trending.length}
//         next={fetchTrendingCards}
//         hasMore={hasMore}
//         loader={<Loading />}
//       >
//         <Cards data={trending} title={category} />
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default Trending;

import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/templates/Topnav";
import Dropdown from "../components/templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./templates/Loading";

function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchTrendingCards = useCallback(async () => {
    if (trending.length >= 50) {
      setHasMore(false);
      return;
    }

    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrending((prevTrending) => [...prevTrending, ...data.results]);
        setPage((prevPage) => prevPage + 1);
        if (trending.length + data.results.length >= 50) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  }, [category, duration, page, trending.length]);

  const refreshHandler = () => {
    setTrending([]);
    setPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  useEffect(() => {
    fetchTrendingCards();
  }, [fetchTrendingCards]);

  return trending.length > 0 ? (
    <div className="w-screen h-full">
      {/* Container for header and dropdown */}
      <div className="w-full px-[5%] flex flex-col sm:flex-row items-start sm:items-center justify-between sm:space-x-4">
        <h1 className="text-2xl font-semibold text-zinc-300 p-3 flex items-center sm:ml-0 ml-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
          ></i>
          Trending
        </h1>
        <small className="text-sm text-zinc-500 ml-16 sm:ml-0">{category}</small>

        {/* Topnav and Dropdown Container */}
        <div className="flex flex-col sm:flex-row items-center w-full mt-3 sm:mt-0">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-2"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      {/* Infinite scroll for fetching more trending cards */}
      <InfiniteScroll
        dataLength={trending.length}
        next={fetchTrendingCards}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;

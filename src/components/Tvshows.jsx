// import React, { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Topnav from "../components/templates/Topnav";
// import Dropdown from "../components/templates/Dropdown";
// import axios from "../utils/axios";
// import Cards from "./templates/Cards";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "./templates/Loading";

// function TVShows() {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState("popular"); // Initial category for TV shows
//   const [tvShows, setTvShows] = useState([]); // State for storing TV shows
//   const [page, setPage] = useState(1); // Page number for pagination
//   const [hasMore, setHasMore] = useState(true); // Flag to indicate if more data is available

//   document.title = "TV Shows | " + category; // Update the document title

//   const fetchTvShowCards = useCallback(async () => {
//     if (!hasMore) return; // Prevent fetching if there's no more data

//     try {
//       // Adjust endpoint based on category selection
//       const endpoint = `/tv/${category}?page=${page}`; // API endpoint for TV shows

//       const { data } = await axios.get(endpoint);
//       if (data.results.length > 0) {
//         setTvShows((prevTvShows) => [...prevTvShows, ...data.results]); // Append new data to existing TV shows
//         setPage((prevPage) => prevPage + 1); // Increment page after successful fetch

//         // Check if we have reached the limit (e.g., 50 shows)
//         if (tvShows.length + data.results.length >= 50) {
//           setHasMore(false); // No more data to fetch
//         }
//       } else {
//         setHasMore(false); // No more data to fetch
//       }
//     } catch (error) {
//       console.error("Error fetching TV show data:", error);
//     }
//   }, [category, page, hasMore, tvShows.length]); // Added tvShows.length to dependency array

//   const refreshHandler = () => {
//     setTvShows([]); // Clear existing TV shows
//     setPage(1); // Reset to first page
//     setHasMore(true); // Reset hasMore flag
//   };

//   useEffect(() => {
//     refreshHandler(); // Refresh data when category changes
//   }, [category]);

//   useEffect(() => {
//     fetchTvShowCards(); // Fetch TV shows when component mounts
//   }, [fetchTvShowCards]);

//   return tvShows.length > 0 ? (
//     <div className="w-screen h-full">
//       <div className="w-full px-[5%]  flex items-center justify-between">
//         <h1 className="text-2xl w-[17%] font-semibold text-zinc-300 p-3">
//           <i
//             onClick={() => navigate(-1)}
//             className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
//           ></i>
//           TV Shows
//         </h1>
//         <small className="text-sm text-zinc-500">({category})</small>

//         <div className="flex items-center w-[100%]">
//           <Topnav />
//           <Dropdown
//             title="Category"
//             options={["popular", "airing_today", "top_rated", "on_the_air"]} // Dropdown options for TV shows
//             value={category} // Set dropdown to show selected category
//             func={(e) => setCategory(e.target.value)} // Update category state on change
//           />
//         </div>
//       </div>

//       <InfiniteScroll
//         dataLength={tvShows.length} // Length of TV shows data
//         next={fetchTvShowCards} // Fetch next page of data when user scrolls down
//         hasMore={hasMore} // Only fetch if there are more shows
//         loader={<h4>Loading...</h4>}
//         scrollThreshold={0.9} // Trigger fetch when 90% of the scroll is reached
//       >
//         <Cards data={tvShows} title="tv" /> {/* Render the TV shows */}
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default TVShows;

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/templates/Topnav";
import Dropdown from "../components/templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./templates/Loading";

function TVShows() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular"); // Initial category for TV shows
  const [tvShows, setTvShows] = useState([]); // State for storing TV shows
  const [page, setPage] = useState(1); // Page number for pagination
  const [hasMore, setHasMore] = useState(true); // Flag to indicate if more data is available

  document.title = "TV Shows | " + category; // Update the document title

  const fetchTvShowCards = useCallback(async () => {
    if (!hasMore) return; // Prevent fetching if there's no more data

    try {
      // Adjust endpoint based on category selection
      const endpoint = `/tv/${category}?page=${page}`; // API endpoint for TV shows

      const { data } = await axios.get(endpoint);
      if (data.results.length > 0) {
        setTvShows((prevTvShows) => [...prevTvShows, ...data.results]); // Append new data to existing TV shows
        setPage((prevPage) => prevPage + 1); // Increment page after successful fetch

        // Check if we have reached the limit (e.g., 50 shows)
        if (tvShows.length + data.results.length >= 50) {
          setHasMore(false); // No more data to fetch
        }
      } else {
        setHasMore(false); // No more data to fetch
      }
    } catch (error) {
      console.error("Error fetching TV show data:", error);
    }
  }, [category, page, hasMore, tvShows.length]); // Added tvShows.length to dependency array

  const refreshHandler = () => {
    setTvShows([]); // Clear existing TV shows
    setPage(1); // Reset to first page
    setHasMore(true); // Reset hasMore flag
  };

  useEffect(() => {
    refreshHandler(); // Refresh data when category changes
  }, [category]);

  useEffect(() => {
    fetchTvShowCards(); // Fetch TV shows when component mounts
  }, [fetchTvShowCards]);

  return tvShows.length > 0 ? (
    <div className="w-screen h-full">
      <div className="w-full px-[5%] flex flex-col sm:flex-row items-start sm:items-center justify-between sm:space-x-4">
        <h1 className="text-2xl font-semibold text-zinc-300 p-3 flex items-center sm:ml-0 ml-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
          ></i>
          TV Shows
        </h1>
        <small className="text-sm text-zinc-500 ml-16 sm:ml-0">{category}</small>

        {/* Topnav and Dropdown Container */}
        <div className="flex flex-col sm:flex-row items-center w-full mt-3 sm:mt-0">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "airing_today", "top_rated", "on_the_air"]} // Dropdown options for TV shows
            value={category} // Set dropdown to show selected category
            func={(e) => setCategory(e.target.value)} // Update category state on change
          />
        </div>
      </div>

      {/* Infinite scroll for fetching more TV shows */}
      <InfiniteScroll
        dataLength={tvShows.length} // Length of TV shows data
        next={fetchTvShowCards} // Fetch next page of data when user scrolls down
        hasMore={hasMore} // Only fetch if there are more shows
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.9} // Trigger fetch when 90% of the scroll is reached
      >
        <Cards data={tvShows} title="tv" /> {/* Render the TV shows */}
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default TVShows;

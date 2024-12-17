// import React, { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Topnav from "../components/templates/Topnav";
// import Dropdown from "../components/templates/Dropdown";
// import axios from "../utils/axios";
// import Cards from "./templates/Cards";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "./templates/Loading";

// function Movies() {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState("now_playing");
//   const [movie, setMovie] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   document.title = "Movie | Movies" + " " + category;

//   const fetchMovieCards = useCallback(async () => {
//     if (!hasMore) return; // Prevent fetching if there's no more data

//     try {
//       // Adjust endpoint based on category selection
//       const endpoint =
//         category === "all"
//           ? "/trending/all/day"
//           : `/movie/${category}?page=${page}`;

//       const { data } = await axios.get(endpoint);
//       if (data.results.length > 0) {
//         setMovie((prevMovie) => [...prevMovie, ...data.results]);
//         setPage((prevPage) => prevPage + 1); // Increment page only after successful fetch

//         // Check if we have reached the limit (e.g., 50 movies)
//         if (movie.length + data.results.length >= 50) {
//           setHasMore(false); // No more data to fetch
//         }
//       } else {
//         setHasMore(false); // No more data to fetch
//       }
//     } catch (error) {
//       console.error("Error fetching movie data:", error);
//     }
//   }, [category, page, hasMore]); // Added hasMore to dependency array

//   const refreshHandler = () => {
//     setMovie([]);
//     setPage(1);
//     setHasMore(true);
//   };

//   useEffect(() => {
//     refreshHandler();
//   }, [category]);

//   useEffect(() => {
//     fetchMovieCards();
//   }, [fetchMovieCards]);

//   return movie.length > 0 ? (
//     <div className="w-screen h-full">
//       <div className="w-full px-[5%] flex items-center justify-between">
//         <h1 className="text-2xl font-semibold text-zinc-300 p-3">
//           <i
//             onClick={() => navigate(-1)}
//             className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
//           ></i>
//           Movies
//         </h1>
//         <small className="text-sm text-zinc-500">({category})</small>

//         <div className="flex items-center w-[100%]">
//           <Topnav />
//           <Dropdown
//             title="Category"
//             options={["popular", "top_rated", "upcoming", "now_playing"]}
//             value={category}
//             func={(e) => setCategory(e.target.value)} // Update category state on change
//           />
//         </div>
//       </div>

//       <InfiniteScroll
//         dataLength={movie.length}
//         next={fetchMovieCards} // Fetch next page of data when user scrolls down
//         hasMore={hasMore} // Only fetch if there are more movies
//         loader={<h4>Loading...</h4>}
//         scrollThreshold={0.9} // Trigger fetch when 90% of the scroll is reached
//       >
//         <Cards data={movie} title="movie" />
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default Movies;

//responsive
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/templates/Topnav";
import Dropdown from "../components/templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./templates/Loading";

function Movies() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "Movie | Movies" + " " + category;

  const fetchMovieCards = useCallback(async () => {
    if (!hasMore) return; // Prevent fetching if there's no more data

    try {
      // Adjust endpoint based on category selection
      const endpoint =
        category === "all"
          ? "/trending/all/day"
          : `/movie/${category}?page=${page}`;

      const { data } = await axios.get(endpoint);
      if (data.results.length > 0) {
        setMovie((prevMovie) => [...prevMovie, ...data.results]);
        setPage((prevPage) => prevPage + 1); // Increment page only after successful fetch

        // Check if we have reached the limit (e.g., 50 movies)
        if (movie.length + data.results.length >= 50) {
          setHasMore(false); // No more data to fetch
        }
      } else {
        setHasMore(false); // No more data to fetch
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }, [category, page, hasMore]); // Added hasMore to dependency array

  const refreshHandler = () => {
    setMovie([]);
    setPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  useEffect(() => {
    fetchMovieCards();
  }, [fetchMovieCards]);

  return movie.length > 0 ? (
    <div className="w-screen h-full">
      {/* Container for header and dropdown */}
      <div className="w-full px-[5%] flex flex-col sm:flex-row items-start sm:items-center justify-between sm:space-x-4">
        <h1 className="text-2xl font-semibold text-zinc-300 p-3 flex items-center sm:ml-0 ml-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
          ></i>
          Movies
        </h1>
        <small className="text-sm text-zinc-500 ml-16 sm:ml-0">{category}</small>

        {/* Topnav and Dropdown Container */}
        <div className="flex flex-col sm:flex-row items-center w-full mt-3 sm:mt-0">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            value={category}
            func={(e) => setCategory(e.target.value)} // Update category state on change
          />
        </div>
      </div>

      {/* Infinite scroll for fetching more movie cards */}
      <InfiniteScroll
        dataLength={movie.length}
        next={fetchMovieCards} // Fetch next page of data when user scrolls down
        hasMore={hasMore} // Only fetch if there are more movies
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.9} // Trigger fetch when 90% of the scroll is reached
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movies;

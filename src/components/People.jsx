// import React, { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Topnav from "../components/templates/Topnav";
// import Dropdown from "../components/templates/Dropdown";
// import axios from "../utils/axios";
// import Cards from "./templates/Cards";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Loading from "./templates/Loading";

// function People() {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState("popular"); // Initial category for people
//   const [people, setPeople] = useState([]); // State for storing people
//   const [page, setPage] = useState(1); // Page number for pagination
//   const [hasMore, setHasMore] = useState(true); // Flag to indicate if more data is available

//   document.title = "People | " + category; // Update the document title

//   const fetchPeopleCards = useCallback(async () => {
//     if (!hasMore) return; // Prevent fetching if there's no more data

//     try {
//       // Adjust endpoint based on category selection
//       const endpoint = `/person/${category}?page=${page}`; // API endpoint for people

//       const { data } = await axios.get(endpoint);
//       if (data.results.length > 0) {
//         setPeople((prevPeople) => [...prevPeople, ...data.results]); // Append new data to existing people
//         setPage((prevPage) => prevPage + 1); // Increment page after successful fetch

//         // Check if we have reached the limit (e.g., 50 people)
//         if (people.length + data.results.length >= 100) {
//           setHasMore(false); // No more data to fetch
//         }
//       } else {
//         setHasMore(false); // No more data to fetch
//       }
//     } catch (error) {
//       console.error("Error fetching people data:", error);
//     }
//   }, [category, page, hasMore, people.length]); // Added people.length to dependency array

//   const refreshHandler = () => {
//     setPeople([]); // Clear existing people
//     setPage(1); // Reset to first page
//     setHasMore(true); // Reset hasMore flag
//   };

//   useEffect(() => {
//     refreshHandler(); // Refresh data when category changes
//   }, [category]);

//   useEffect(() => {
//     fetchPeopleCards(); // Fetch people when component mounts
//   }, [fetchPeopleCards]);

//   return people.length > 0 ? (
//     <div className="w-screen h-full">
//       <div className="w-full px-[5%] flex items-center justify-between">
//         <h1 className="text-2xl w-[17%] font-semibold text-zinc-300 p-3">
//           <i
//             onClick={() => navigate(-1)}
//             className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
//           ></i>
//           People
//         </h1>

//         <div className="flex items-center w-[100%]">
//           <Topnav />
//         </div>
//       </div>

//       <InfiniteScroll
//         dataLength={people.length} // Length of people data
//         next={fetchPeopleCards} // Fetch next page of data when user scrolls down
//         hasMore={hasMore} // Only fetch if there are more people
//         loader={<h4>Loading...</h4>}
//         scrollThreshold={0.9} // Trigger fetch when 90% of the scroll is reached
//       >
//         <Cards data={people} title="person" /> {/* Render the people */}
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// }

// export default People;

// responsive
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/templates/Topnav";
import Dropdown from "../components/templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./templates/Loading";

function People() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular"); // Initial category for people
  const [people, setPeople] = useState([]); // State for storing people
  const [page, setPage] = useState(1); // Page number for pagination
  const [hasMore, setHasMore] = useState(true); // Flag to indicate if more data is available

  document.title = "People | " + category; // Update the document title

  const fetchPeopleCards = useCallback(async () => {
    if (!hasMore) return; // Prevent fetching if there's no more data

    try {
      // Adjust endpoint based on category selection
      const endpoint = `/person/${category}?page=${page}`; // API endpoint for people

      const { data } = await axios.get(endpoint);
      if (data.results.length > 0) {
        setPeople((prevPeople) => [...prevPeople, ...data.results]); // Append new data to existing people
        setPage((prevPage) => prevPage + 1); // Increment page after successful fetch

        // Check if we have reached the limit (e.g., 100 people)
        if (people.length + data.results.length >= 100) {
          setHasMore(false); // No more data to fetch
        }
      } else {
        setHasMore(false); // No more data to fetch
      }
    } catch (error) {
      console.error("Error fetching people data:", error);
    }
  }, [category, page, hasMore, people.length]); // Added people.length to dependency array

  const refreshHandler = () => {
    setPeople([]); // Clear existing people
    setPage(1); // Reset to first page
    setHasMore(true); // Reset hasMore flag
  };

  useEffect(() => {
    refreshHandler(); // Refresh data when category changes
  }, [category]);

  useEffect(() => {
    fetchPeopleCards(); // Fetch people when component mounts
  }, [fetchPeopleCards]);

  return people.length > 0 ? (
    <div className="w-screen h-full">
      <div className="w-full px-[5%] flex flex-col sm:flex-row items-start sm:items-center justify-between sm:space-x-4">
        <h1 className="text-2xl font-semibold text-zinc-300 p-3 flex items-center sm:ml-0 ml-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-2xl text-[#6556CD] cursor-pointer mr-2"
          ></i>
          People
        </h1>

        {/* Topnav Container */}
        <div className="flex flex-col sm:flex-row items-center w-full mt-3 sm:mt-0">
          <Topnav />
        </div>
      </div>

      {/* Infinite scroll for fetching more people */}
      <InfiniteScroll
        dataLength={people.length} // Length of people data
        next={fetchPeopleCards} // Fetch next page of data when user scrolls down
        hasMore={hasMore} // Only fetch if there are more people
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.9} // Trigger fetch when 90% of the scroll is reached
      >
        <Cards data={people} title="person" /> {/* Render the people */}
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People;

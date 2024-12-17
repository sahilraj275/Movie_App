import React, { useEffect } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import { useState } from "react";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCard from "./templates/HorizontalCard";
import Dropdown from "./templates/Dropdown";
import Loading from "./templates/Loading";

function Home() {
  document.title = "Movie | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getWallPaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomWallpaper =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomWallpaper);
    } catch (error) {
      console.log(error);
    }
  };
  const trendingCards = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    trendingCards();
    !wallpaper && getWallPaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-full md:w-[84%] min-h-screen no-scrollbar overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className="mb-5 flex flex-col md:flex-row items-center justify-between p-3">
          <h1 className="text-lg md:text-2xl font-bold text-zinc-200">
            Trending
          </h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCard data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;

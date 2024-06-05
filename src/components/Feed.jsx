import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import banner from "../img/bg3.jpg";
import { Link } from "react-router-dom";

const Feed = () => {
  // const { loading, searchResults } = useContext(Context);

  // useEffect(() => {
  //   document.getElementById("root").classList.remove("custom-h");
  //   console.log(searchResults);
  // }, []);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("Fetched data:", jsonData); // Debugging: log fetched data
        if (jsonData.items && Array.isArray(jsonData.items)) {
          setItems(jsonData.items);
        } else {
          console.error(
            "Fetched data does not contain an items array:",
            jsonData
          );
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      {/* <div className="flex h-[calc(100%-56px)]"> */}
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
        {/* <div className="grow h-full overflow-y-auto bg-white"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-5">
          {items.length > 0 ? (
            items.map((item, index) => (
              <Link
                to={`https://youtube.com/watch?v=${item.id}`}
                className="videocard"
                key={index}
              >
                {item.snippet.thumbnails?.maxres?.url && (
                  <img
                    src={item.snippet.thumbnails.maxres.url}
                    alt="Thumbnail"
                    className="rounded-2xl"
                  />
                )}
                <h2 className=" mt-2 font-semibold">
                  {item.snippet.title.length > 40
                    ? item.snippet.title.substring(0, 40) + "..."
                    : item.snippet.title}
                </h2>
                {/* <p>{item.snippet.description || "No Description"}</p> */}
                <p>
                  {item.snippet.channelTitle.length > 35
                    ? item.snippet.channelTitle.substring(0, 35) + "..."
                    : item.snippet.channelTitle}
                </p>
                <p>{item.statistics.viewCount} views • 2 days </p>
              </Link>
            ))
          ) : (
            <p>No data available</p>
          )}

          {/* <Link to={`video/20/4521`} className="videocard">
            <img src={banner} alt="sds" />
            <h2 className=" mt-2 font-semibold"></h2>
            <h3>grssfsdf</h3>
            <p>14k views • 2 days ago</p>
          </Link> */}

          {/* {!loading &&
            searchResults &&
            searchResults?.map((item) => {
              if (item?.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })} */}
        </div>
      </div>
    </div>
  );
};

export default Feed;

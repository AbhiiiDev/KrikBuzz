import { useEffect, useState } from "react";
import { HOST, KEY } from "../constants/constants";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import axios from "axios";
import { ScrollArea } from "@mantine/core";

const headingList = [
  "Commentary",
  "Scorecard",
  "Squads",
  "Highlights",
  "Full commentary",
  "LiveBlog",
  "News",
  "Photos",
  "Match Facts",
];

const headings = {
  commentary: true,
  Scorecard: false,
  Squads: false,
  Highlights: false,
  "Full commentary": false,
  LiveBlog: false,
  News: false,
  Photos: false,
  "Match Facts": false,
};

const LiveScore = () => {
  const [key] = useSearchParams();
  console.log(key.get("v"));

  const [matchHeader, setMatchHeader] = useState(null);

  const getData = async () => {
    const options = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${key.get(
        "v"
      )}/comm`,
      headers: {
        "X-RapidAPI-Key": KEY,
        "X-RapidAPI-Host": HOST,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      await setMatchHeader(response.data.matchHeader);
      console.log('res matchheader',response.data.matchHeader)
      // console.log(matchHeader)
    } catch (error) {
      console.error(error);
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const setIndex = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white mt-2 p-3">
      {matchHeader ? (
        <section id="Header" className="">
          <h1 className="font-semibold text-lg ">
            {matchHeader.team1.name + " vs " + matchHeader.team2.name} - Live
            Cricket Score , Commentary
          </h1>

          <section id="subHHeading" className="flex flex-col md:flex-row md:justify-around">
            <div className="flex text-[#666]">
              <span className="text-sm font-semibold mt-1">Series : </span>{" "}
              <p className="text-sm items-center mt-1">
                {" "}
                &nbsp;{matchHeader.seriesDesc}
              </p>
            </div>
            <div className="flex text-[#666]">
              <span className="text-sm font-semibold mt-1">Venue : </span>{" "}
              <p className="text-sm items-center mt-1">
                {" "}
                &nbsp;Bay Oval, Mount Maunganui
              </p>
            </div>
            <div className="flex text-[#666]">
              <span className="text-sm font-semibold mt-1">Date & Time : </span>{" "}
              <p className="text-sm items-center mt-1">
                {" "}
                &nbsp;South Africa tour of New Zealand, 2024
              </p>
            </div>
          </section>
        </section>
      ) : (
        <p>Loading ......</p>
      )}
      <section id="list-header" className="mt-5  ">
        <ScrollArea type="never">
        <ul className="flex mt-4">
          {headingList.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer mx-4 ${
                activeIndex === index
                  ? "font-bold text-green-700 border-green-700 border-b-2 "
                  : " "
              }`}
              onClick={() => setIndex(index)}
            >
              <Link to={`/livescore/${item.toLowerCase()}/?v=${key.get("v")}`}>
                {item}{" "}
              </Link>
            </li>
          ))}
        </ul>
        </ScrollArea>
      </section>
      <Outlet />

      {/* {commentaryList.map((comments)=>(
          <>
          <p>
            {comments.commText}
          </p>
     
          </>
        ))} */}
    </div>
  );
};

export default LiveScore;

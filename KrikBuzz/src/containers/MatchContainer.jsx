import { useEffect } from "react";
import MatchCards from "../components/MatchCards";
import SubHeader from "../components/SubHeader";
import { Link } from "react-router-dom";
import { getMatches } from "../api/recentMatches";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../components/Skeletons/CardSkeleton";
import ErrorPage from "../views/ErrorPage";
import { Button, ScrollArea } from "@mantine/core";


const MatchContainer = () => {

  const { data: matches, isLoading,isError } = useQuery({
    queryKey: ["matches"],
    queryFn: getMatches,
    staleTime: 5 * 60 * 1000, // Cache for 5 mins
    cacheTime: 10 * 60 * 1000, // Keep data for 10 mins
  });

  useEffect(() => {
    // setMatches(data)
    console.log("data", matches);
    // console.log(matches)
  }, [matches]);


  if (isLoading) {
    return (
      <div className="flex gap-3 m-2 overflow-hidden ">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }
  if(isError) {
    return (
   <ErrorPage/>
    )
  }
  return (
    <>
      <div className="hidden md:flex h-fit bg-gray-800 justify-between">
        <ul className="flex">
          <li className="text-white text-sm  p-2 bg-gray-900  hover:bg-gray-800 cursor-pointer">
            MATCHES
          </li>
          {matches[0] ?
            matches.map((match, index) => (
              <SubHeader key={index} data={match} />
            )): "Nothing found here...."}
        </ul>
        <div className="text-white text-sm mx-2  p-2 hover:bg-gray-600 cursor-pointer">
          All
        </div>
      </div>
      <ScrollArea scrollbars="x" type="hover">
  <div className="sm:p-2 flex  bg-gray-400 items-center">
    {
      isLoading && (<div className="flex gap-3 m-2 ">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>)
    }
        {matches[0] &&
          matches.map((match, index) => (
            <div key={index}>
              <Link
                to={
                  "/livescore/commentary?v=" +
                  match.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchInfo
                    .matchId
                }
              >
                <MatchCards matchData={match} />
              </Link>
            </div>
          ))}
          <Button color="white" variant="outline" className="rounded-full">More{" >"}</Button>
      </div>      
      </ScrollArea>
    </>
  );
};

export default MatchContainer;

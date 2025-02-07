import { useEffect } from "react";
import MatchCards from "../components/MatchCards";
import SubHeader from "../components/SubHeader";
import { Link } from "react-router-dom";
import { getMatches } from "../api/recentMatches";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../components/Skeletons/CardSkeleton";
import ErrorPage from "../views/ErrorPage";


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

      <div className="p-2 flex flex-wrap bg-gray-400">
      {/* <Button
        className={`absolute left-0 top-1/2 -translate-y-1/2 ${
          canScrollLeft ? "opacity-100" : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        variant="filled"
      >
                <FaAngleLeft />
      </Button> */}
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
          {/* <Button
        className={`absolute right-0 top-1/2 -translate-y-1/2 ${
          canScrollRight ? "opacity-100" : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        variant="filled"
      >
        < FaAngleRight/>
      </Button> */}

      </div>
    </>
  );
};

export default MatchContainer;

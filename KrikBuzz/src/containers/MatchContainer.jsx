import { useEffect } from "react";
import MatchCards from "../components/MatchCards";
import SubHeader from "../components/SubHeader";
import { Link } from "react-router-dom";
import { getMatches } from "../api/recentMatches";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../components/Skeletons/CardSkeleton";

const MatchContainer = () => {
  const { data: matches, isLoading } = useQuery({
    queryKey: ["matches"],
    queryFn: getMatches,
  });

  useEffect(() => {
    // setMatches(data)
    console.log("data", matches);
    // console.log(matches)
  }, [matches]);

  if (isLoading) {
    return (
      <div className="flex ">
        <CardSkeleton />
      </div>
    );
  }
  return (
    <>
      <div className=" h-12 bg-gray-800 flex justify-between">
        <ul className="flex">
          <li className="text-white text-sm  p-2 bg-gray-900  hover:bg-gray-800 cursor-pointer">
            MATCHES
          </li>
          {matches[0] &&
            matches.map((match, index) => (
              <SubHeader key={index} data={match} />
            ))}
        </ul>
        <div className="text-white text-sm mx-2  p-2 hover:bg-gray-600 cursor-pointer">
          All
        </div>
      </div>

      <div className="relative flex bg-gray-400">
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
      </div>
    </>
  );
};

export default MatchContainer;

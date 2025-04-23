import PropTypes from "prop-types";
import { FETCH_IMG } from "../constants/constants";
import { arrayBufferToBase64 } from "../constants/constants";
import { useQuery } from "@tanstack/react-query";

const MatchCards = ({ matchData }) => {
  const { seriesMatches } = matchData;
  const { seriesAdWrapper } = seriesMatches[0];
  const { seriesName } = seriesAdWrapper;
  const { matches } = seriesAdWrapper;
  const { matchInfo, matchScore } = matches[0];
  const { team1, team2, status } = matchInfo;
  const { teamName: Team1Name, imageId: img1 } = team1;
  const { teamName: Team2Name, imageId: img2 } = team2;
  const runs1=matchScore?.team1Score?.inngs1?.runs ?? "";
  const wkts1 = matchScore?.team1Score?.inngs1?.wickets ?? "";
  const runs2 = matchScore?.team2Score?.inngs1?.runs ?? "";
  const wkts2 = matchScore?.team2Score?.inngs1?.wickets ?? "";
  
  const {data:image1}=useQuery({
    queryKey: ["image", img1],  // Depend on img1,
    queryFn: () => FETCH_IMG(img1),  // Fetch function,
    enabled:!!img1,
    staleTime: 5 * 60 * 1000, // Cache for 5 mins
    cacheTime: 10 * 60 * 1000, // Keep data for 10 mins
  })
  const {data:image2}=useQuery({
    queryKey: ["image", img2],  // Depend on img1,
    queryFn: () => FETCH_IMG(img2),  // Fetch function,
    enabled:!!img2,
    staleTime: 5 * 60 * 1000, // Cache for 5 mins
    cacheTime: 10 * 60 * 1000, // Keep data for 10 mins
  })
  return (
    <div className="m-2 p-2 bg-white text-black shadow-lg w-72  h-44 border rounded-md">
      <div className="text-sm mx-2 p-2 text-red-900">{seriesName}</div>
      <div className="m-3">
        <ul>
          <li className="flex">
            <div className="flex w-[80%] text-sm items-center">
              {image1 && (
                <img
                  className="w-[18px] h-3 "
                  src={`data:image/jpeg;base64,${arrayBufferToBase64(image1)}`}
                  alt="flag"
                />
              )}
              <p className="mx-2">{Team1Name}</p>
            </div>
            <div className="ml-3 w-[20%] font-semibold items-end text-sm ">{runs1 + "-" + wkts1}</div>
          </li>
          <li className="flex justify-end">
            <div className="flex w-[80%] text-sm items-center">
              {image2 && (
                <img
                  className="w-[18px] h-3"
                  src={`data:image/jpeg;base64,${arrayBufferToBase64(image2)}`}
                  alt="flag"
                />
              )}
              <p className="mx-2">{Team2Name}</p>
            </div>
            <div className="ml-3 w-[20%] font-semibold text-sm">{runs2 + "-" + wkts2}</div>
          </li>
        </ul>
      </div>
      <div className="mt-3 mx-3 text-blue-500 text-sm">{status}</div>
    </div>
  );
};

//FUNCTION TO CONVERT TO IMG STRING

MatchCards.propTypes = {
  matchData: PropTypes.object.isRequired,
};
export default MatchCards;

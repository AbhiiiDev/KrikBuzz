import PropTypes from "prop-types";
import { FETCH_IMG } from "../constants/constants";
import { useState, useEffect } from "react";
const MatchCards = ({ matchData }) => {
  const { seriesMatches } = matchData;
  const { seriesAdWrapper } = seriesMatches[0];
  const { seriesName } = seriesAdWrapper;
  const { matches } = seriesAdWrapper;
  const { matchInfo, matchScore } = matches[0];
  const { team1, team2, status } = matchInfo;
  const { teamName: Team1Name, imageId: img1 } = team1;
  const { teamName: Team2Name, imageId: img2 } = team2;
  const {
    team1Score: {
      inngs1: { runs: runs1, wickets: wkts1 },
    },
  } = matchScore;
  const {
    team2Score: {
      inngs1: { runs: runs2, wickets: wkts2 },
    },
  } = matchScore;

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const image1Data = await FETCH_IMG(img1);
        setImage1(image1Data);

        const image2Data = await FETCH_IMG(img2);
        setImage2(image2Data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [img1, img2]);

  return (
    <div className=" m-2 bg-white text-black shadow-lg w-[265px]  h-36 border rounded-md overflow-hidden">
      <div className="text-sm mx-2 text-red-900">{seriesName}</div>
      <div className="m-3">
        <ul>
          <li className="flex justify-evenly">
            <div className="flex ">
              {image1 && (
                <img
                  className="w-[18px] h-3 my-2"
                  src={`data:image/jpeg;base64,${arrayBufferToBase64(image1)}`}
                  alt="flag"
                />
              )}
              <p className="mx-2">{Team1Name}</p>
            </div>
            <div className="ml-3 font-semibold">{runs1 + "-" + wkts1}</div>
          </li>
          <li className="flex justify-around">
            <div className="flex">
              {image2 && (
                <img
                  className="w-[18px] h-3 my-2 "
                  src={`data:image/jpeg;base64,${arrayBufferToBase64(image2)}`}
                  alt="flag"
                />
              )}
              <p className="mx-2">{Team2Name}</p>
            </div>
            <div className="ml-3 font-semibold">{runs2 + "-" + wkts2}</div>
          </li>
        </ul>
      </div>
      <div className="mt-3 mx-3 text-blue-500 ">{status}</div>
    </div>
  );
};


//FUNCTION TO CONVERT TO IMG STRING

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);

  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return btoa(binary);
}

MatchCards.propTypes = {
  matchData: PropTypes.object.isRequired,
};
export default MatchCards;


import  PropTypes from "prop-types";
import { FETCH_IMG } from "../constants/constants";
const MatchCards = ({matchData}) => {


const {matchType}=matchData;
const {seriesMatches}=matchData;
const {seriesAdWrapper}=seriesMatches[0];
const {seriesName}=seriesAdWrapper;
const {matches}=seriesAdWrapper;
const {matchInfo,matchScore}=matches[0]
const {team1,team2,status}=matchInfo;
const {teamName:Team1Name,imageID:img1}=team1;
const {teamName:Team2Name,imageID:img2}=team2;
const {team1Score:{inngs1 :{runs:runs1,wickets:wkts1}}}=matchScore;
const {team2Score:{inngs1:{runs:runs2,wickets:wkts2}}}=matchScore;
// const {team2Score:}


console.log(seriesAdWrapper)
console.log(seriesMatches);
// const {seriesAdWrapper}=seriesMatches;
// const {seriesName}=seriesAdWrapper;
// console.log(seriesName);
// console.log(seriesMatches);
// console.log(matchType)

  return (
    <div className=' m-2 bg-white text-black shadow-lg w-[265px]  h-36 border rounded-md overflow-hidden'>
     <div className='text-sm mx-2 text-red-900'>
     {seriesName}
     </div>
     <div className='m-3'>
      <ul>
        <li className='flex justify-around'>
         {  FETCH_IMG(img1)+Team1Name}
          <div className='ml-3 font-semibold'>
{runs1+"-"+wkts1}
          </div>
        </li>
        <li className='flex justify-around'>
       {Team2Name}
          <div className='ml-3 font-semibold'>
{runs2+"-"+wkts2}
          </div>
        </li>
      </ul>

     </div>
     <div className='mt-3 mx-3 text-blue-500 '>
    {status}
     </div>
    </div>
  )
}


MatchCards.propTypes = {
  matchData: PropTypes.object.isRequired, // Adjust the prop type as needed
};
export default MatchCards


import  PropTypes from "prop-types";
const MatchCards = ({matchInfo}) => {


const {matchType}=matchInfo[0];
const {seriesMatches}=matchInfo[0];
console.log(seriesMatches);
console.log(matchType)

  return (
    <div className=' m-2 bg-white text-black shadow-lg w-[250px]  h-36 border rounded-md'>
     <div className='text-sm mx-2'>
     {matchType}
     </div>
     <div className='m-3'>
      <ul>
        <li className='flex'>
          Team 1
          <div className='ml-3'>
Score 1
          </div>
        </li>
        <li className='flex'>
          Team 2
          <div className='ml-3'>
Score 2
          </div>
        </li>
      </ul>

     </div>
     <div className='mt-3 mx-3 text-blue-500'>
      Team 1 won by 3 wkts
     </div>
    </div>
  )
}


MatchCards.propTypes = {
  matchInfo: PropTypes.array.isRequired, // Adjust the prop type as needed
};
export default MatchCards

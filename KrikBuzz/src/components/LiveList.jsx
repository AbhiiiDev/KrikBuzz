import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { HOST, KEY } from '../constants/constants';

const LiveList = () => {

  const [matchData,setMatchData]=useState([]);
const [matchInfo,setMatchInfo]=useState([]);
  const getData=async ()=>{
    const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
      headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': HOST
      }
    };
    
   try {
      const response = await axios.request(options);
      
      setMatchData(response.data.typeMatches);
      console.log(response.data.typeMatches);
      console.log(matchData)
    } catch (error) {
      console.error(error);
    }
  
  
  }

//   matchData.forEach(({ matchType, seriesMatches }) => {
//     console.log("Match Type:", matchType);
//     seriesMatches[0](({ seriesAdWrapper: { seriesId, seriesName } }) => {
//         console.log("Series ID:", seriesId);
//         console.log("Series Name:", seriesName);
      
//     });
// });

// matchData.forEach(({ matchType, seriesMatches }) => {
//   console.log(matchType)
//   if (seriesMatches.length > 0) {
//       const { seriesAdWrapper: { seriesId, seriesName, matches } } = seriesMatches[0];
//       console.log("Match Type:", matchType);
//       console.log("Series ID:", seriesId);
//       console.log("Series Name:", seriesName);
//       console.log("Matches:", matches);
//       // setMatchInfo(matches);
//   }
// });



useEffect(()=>{
getData();
},[])




  return (
    <div className='bg-white mt-2'>
      <div className=''>

    <h2 className='font-semibold text-3xl'>Live Cricket Score</h2>

<hr className='mt-3' />


{matchData.map(({ matchType, seriesMatches }) => {
  if (seriesMatches.length > 0) {
    const { seriesAdWrapper: { seriesId, seriesName, matches } } = seriesMatches[0];
    return (
      <div key={seriesId} className='mb-5 '>
        <p className='bg-gray-200 text-xl font-bold p-2 '>{seriesName}</p>
      
      <p className='font-bold  mt-3 p-2 '>India vs England <span className='font-light'> ,3rd Test</span></p>
        {/* <p>{matches}</p> */}
        <div className='bg-gray-100 mt-3 flex flex-col border-l-2 border-red-300 '>
        <div className='flex justify-start mx-2 '>
        <p>IND</p>  <p className='ml-3'>445</p>
          </div>  

          <div className='flex justify-start mx-2'>
          <p>ENG</p> <p>179-1</p>
          
          </div>
          <p className='text-red-500 mx-2'>Day 2: Stumps- England Trail by 234 runs</p>
        </div>
      </div>
    );
  }
  return null; // To handle the case where seriesMatches is empty
})}

      </div>
    </div>
  )
}

export default LiveList;

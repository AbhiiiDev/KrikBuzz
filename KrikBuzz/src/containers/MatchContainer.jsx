import React, { useEffect, useState } from 'react'
import MatchCards from '../components/MatchCards'
import { KEY,HOST } from '../constants/constants';
import axios from 'axios';
import SubHeader from '../components/SubHeader';
import { Link } from 'react-router-dom';


const MatchContainer = () => {

    const [matches,setMatches]=useState([]);

    const options={
        method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  headers: {
    'X-RapidAPI-Key': `${KEY}`,
    'X-RapidAPI-Host': `${HOST}`
  }
    }

useEffect(()=>{
getMatches();
},[])
 
const getMatches=async()=>{
    try {
        const response=await axios.request(options);
        // console.log((await response).data.typeMatches);
     await setMatches((await response)?.data?.typeMatches)
        // console.log(matches);
    } catch (error) {
        console.log(error);
    }
}





  return (
<>

<div className=' h-12 bg-gray-800 flex justify-between'>
      <ul className="flex">
      <li className="text-white text-sm  p-2 bg-gray-900  hover:bg-gray-800 cursor-pointer">
          MATCHES
        </li>
{
            matches[0] && matches.map((match,index)=> 
           <SubHeader key={index} data={match}/>
              )
        }
       
    </ul>
    <div className="text-white text-sm mx-2  p-2 hover:bg-gray-600 cursor-pointer">
          All
         </div>
    </div>
    <div className='flex overflow-hidden bg-gray-300'>


    
        {
            matches[0] && matches.map((match,index)=> 
            <div key={index}>
           
             <Link to={'/livescore/commentary?v='+match.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchInfo.matchId}>
               <MatchCards matchData={match} />
              </Link>
              {
                // console.log(match)
              }
              </div>
              )
        }
   
  
    </div>
</>
  )
}

export default MatchContainer

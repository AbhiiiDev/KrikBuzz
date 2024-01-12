import React, { useEffect, useState } from 'react'
import MatchCards from '../components/MatchCards'
import { KEY,HOST } from '../constants/constants';
import axios from 'axios';


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
        setMatches((await response)?.data?.typeMatches)
        // console.log(matches);
    } catch (error) {
        console.log(error);
    }
}





  return (
    <div className='flex overflow-hidden bg-gray-300'>
        {
            matches[0] && matches.map((match,index)=> 
            <div key={index}>
              <MatchCards matchData={match} />
              {
                // console.log(match)
              }
              </div>
              )
        }
    
   
  
    </div>
  )
}

export default MatchContainer

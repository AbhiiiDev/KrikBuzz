import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { HOST, KEY } from '../constants/constants';

const LiveList = () => {

  const [matchData,setMatchData]=useState([]);

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

useEffect(()=>{
getData();
},[])




  return (
    <div className='bg-white mt-2'>
      <div className='font-semibold text-3xl'>

     Live Cricket Score
      </div>
    </div>
  )
}

export default LiveList;

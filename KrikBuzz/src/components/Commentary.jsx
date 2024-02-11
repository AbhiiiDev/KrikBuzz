import React, { useState } from 'react';
import { KEY,HOST } from '../constants/constants';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Commentary = () => {
  const [id]=useSearchParams();

  const [commentaryList,setCommentaryList]=useState([]);

  const  getData= async()=>{

    const options = {
      method: 'GET',
      url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id.get("v")}/comm`,
      headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': HOST
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);

   await setCommentaryList(response.data.commentaryList);
     
    } catch (error) {
      console.error(error);
    }
    }

  
  return (
    <div>
      Commentary page page
    </div>
  )
}

export default Commentary

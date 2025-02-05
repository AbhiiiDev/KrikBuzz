import { useEffect, useState } from 'react';
import { KEY,HOST } from '../constants/constants';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Commentary = () => {
  const [id]=useSearchParams();
  console.log(useSearchParams(id.get("v")))

  const [commentaryList,setCommentaryList]=useState([]);
  const [matchHeader,setMatchHeader]=useState(null);

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
      await setMatchHeader(response.data.matchHeader);
   await setCommentaryList(response.data.commentaryList);
     
    } catch (error) {
      console.error(error);
    }
    }

  useEffect(()=>{
getData();
  },[])
  return (

       <div className="bg-white mt-2 p-2">

{
  matchHeader ? (
<section id="Header" className="">
<div>
      <div className="font-bold text-lg mt-2 mb-3">
          <p>
            AUS 241/4 (20)
          </p>
          <p>
            WI 207/4 (20)
          </p>
          <p className="text-sm font-light text-blue-500">
            AUS won by 6 wkts
          </p>
          <hr className="mt-2" />
          </div>
          </div>
</section>
  ) :(
<p>Loading ......</p>
  )
}
       {commentaryList.map((comments,index)=>(
          <>
          <p key={index} className='m-3'> 
            {comments.commText}
          </p>
          <hr />
          </>
        ))}
    </div>
  )
}

export default Commentary

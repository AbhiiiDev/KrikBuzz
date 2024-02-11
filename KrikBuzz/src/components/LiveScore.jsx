import { useEffect, useState } from "react";
import { HOST, KEY } from "../constants/constants";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import axios from "axios";

const headingList=["Commentary","Scorecard","Squads","Highlights","Full commentary","LiveBlog","News","Photos","Match Facts"];

const headings={
  "commentary":true,
  "Scorecard":false,
  "Squads":false,
  "Highlights":false,
  "Full commentary":false,
  "LiveBlog":false,
  "News":false,
  "Photos":false,
  "Match Facts":false

}

const LiveScore = () => {
  const [key]=useSearchParams();
  // console.log(key.get("v"));


  const [matchHeader,setMatchHeader]=useState(null);
  const [commentaryList,setCommentaryList]=useState([]);

const  getData= async()=>{

const options = {
  method: 'GET',
  url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${key.get("v")}/comm`,
  headers: {
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': HOST
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  
 await setMatchHeader(response.data.matchHeader);
 setCommentaryList(response.data.commentaryList);
  console.log(matchHeader)
} catch (error) {
	console.error(error);
}
}



const [activeIndex,setActiveIndex]=useState(0);

const setIndex=(index)=>
{
setActiveIndex(index);
}


  useEffect(()=>{

    getData();


  },[])



  return (


    <div className="bg-white mt-2 p-2">

      {
        matchHeader ? (
<section id="Header" className="">
      <h1 className=" font-semibold text-xl  ">
      { matchHeader.team1.name +" vs "+matchHeader.team2.name } - Live Cricket Score , Commentary
      </h1>

      <section id="subHHeading" className="flex justify-around">

      <div className="flex text-[#666]">
     <span className="text-sm font-semibold mt-1">Series : </span>   <p className="text-sm items-center mt-1"> &nbsp;{matchHeader.seriesDesc}</p>
       
      </div>
      <div className="flex text-[#666]">
     <span className="text-sm font-semibold mt-1">Venue : </span>   <p className="text-sm items-center mt-1"> &nbsp;Bay Oval, Mount Maunganui</p>
       
      </div>
      <div className="flex text-[#666]">
     <span className="text-sm font-semibold mt-1">Date & Time : </span>   <p className="text-sm items-center mt-1"> &nbsp;South Africa tour of New Zealand, 2024</p>
       
      </div>

      </section>



</section>
        ) :(
<p>Loading ......</p>
        )
      }
      <section id="list-header" className="mt-5  ">
  <ul className="flex mt-4 ">
    {headingList.map((item,index)=>(
  <li key={index} className={`cursor-pointer mx-4 ${ activeIndex=== index? "font-bold text-green-700 border-green-700 border-b-2 ": " "}`} onClick={()=>setIndex((index))}>
     <Link to={`/livescore/${item.toLowerCase()}/?v=${key.get(key)}`}>{item}  </Link></li>
  ))}
  </ul>
</section>
     <Outlet/>
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
        {commentaryList.map((comments)=>(
          <>
          <p>
            {comments.commText}
          </p>
     
          </>
        ))}
      </div>
    </div>
  )
}

export default LiveScore

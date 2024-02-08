import { useEffect, useState } from "react";
import { HOST, KEY } from "../constants/constants";
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

  const [matchHeader,setMatchHeader]=useState(null);

const  getData= async()=>{

const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/80106/comm',
  headers: {
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': HOST
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
 await setMatchHeader(response.data.matchHeader);
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

let name1="";
let name2="";
let seriesDesc="";

if(matchHeader){
  const {team1,team2}=matchHeader;
  const {name:name1}=team1;
  const {name:name2}=team2;
  const {seriesDesc}=matchHeader;
}


  return (
    <div className="bg-white mt-2 p-2">
     <section id="Header" className="">
      <h1 className=" font-semibold text-xl  ">
      { name1+" vs "+name2 } - Live Cricket Score , Commentary
      </h1>
      <section id="subHHeading" className="flex justify-around">

      <subSection className="flex text-[#666]">
     <span className="text-sm font-semibold mt-1">Series : </span>   <p className="text-sm items-center mt-1"> &nbsp;{seriesDesc}</p>
       
      </subSection>
      <subSection className="flex text-[#666]">
     <span className="text-sm font-semibold mt-1">Venue : </span>   <p className="text-sm items-center mt-1"> &nbsp;Bay Oval, Mount Maunganui</p>
       
      </subSection>
      <subSection className="flex text-[#666]">
     <span className="text-sm font-semibold mt-1">Date & Time : </span>   <p className="text-sm items-center mt-1"> &nbsp;South Africa tour of New Zealand, 2024</p>
       
      </subSection>

      </section>
     </section>

<section id="list-header" className="mt-5  ">
  <ul className="flex mt-4 ">
    {headingList.map((item,index)=>(
      <li key={index} className={`cursor-pointer mx-4 ${ activeIndex=== index? "font-bold text-green-700 border-green-700 border-b-2 ": " "}`} onClick={()=>setIndex((index))}>{item}</li>
    ))}
  </ul>
</section>
      
    </div>
  )
}

export default LiveScore

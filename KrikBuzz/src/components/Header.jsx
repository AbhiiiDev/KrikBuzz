import { useEffect,useCallback } from "react";
import { useState } from "react"
import { KEY,HOST } from "../constants/constants";
import axios from "axios";

const Header = () => {

const [teamList,setTeamList]=useState([]);
const [teamHover, setTeamHover]=useState(false);
const [hover,setHover]=useState(false);
const [dropOptions,setDropOptions]=useState([]);

useEffect(()=>
{
getNewsCategory();
getTeamList();
},[])

const getNewsCategory=useCallback(async ()=>{
    const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/cat',
        headers: {
          'X-RapidAPI-Key': KEY,
          'X-RapidAPI-Host': HOST
        }
      };
      
      try {
          const response = await axios.request(options);
        //   console.log(response.data.storyType[0].name);
         await setDropOptions(response.data.storyType);

      } catch (error) {
          console.error(error);
      }
},[])

const getTeamList=async ()=>
{
const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international',
  headers: {
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': HOST,
  }
};
try {
	const response = await axios.request(options);
	
    await setTeamList(response.data.list);
   await console.log(teamList)
} catch (error) {
	console.error(error);
}
}

const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleDropDownEnter =()=> 
  {
    console.log('dropdown entered')
    setHover(true);

  }
  const handleDropDownLeave =()=>
  {
    console.log('dd leave')
    setHover(false);
    
  }




  return (
    <div className="flex justify-evenly bg-[#09ae84]">
      <img className="h-20 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6fe_4zNybRyHSfe3rVymQ2E3jD2-d-AfSJv583qglLFKiWIXKV9BHgkABF7dfaRk6M&usqp=CAU" alt="logo"/>
        <div className="mt-7">
            <ul className="text-white text-center flex  ">
                <li className="mx-3 cursor-pointer">
                    Live Scores
                </li>
                <li className="mx-3 cursor-pointer">
                Schedules
                </li>
                <li className="mx-3 cursor-pointer relative"   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    News
                    { hover &&(
<ul className="absolute top-full left-0 text-black bg-white shadow-md w-36 " >
    { 
          dropOptions.slice(0,8).map((obj)=>{
        return(
            
            <li key={obj.id} className="py-2 px-4 hover:bg-gray-200">
                {obj.name}
            </li>
        )
    })
} 

    </ul>
    )
}
</li>


                <li className="mx-3 cursor-pointer">
                    Series
                </li>
                <li className="mx-3 cursor-pointer relative" onMouseEnter={()=>setTeamHover(true)} onMouseLeave={()=>setTeamHover(false)}>
                    Teams
                    { teamHover &&(
<ul className="absolute top-full left-0 text-black bg-white shadow-md w-36 " >
  <div>

    { 
          teamList.slice(1,13).map((obj)=>{
            return(
              <li key={obj.TeamId} className="py-2 px-4 hover:bg-gray-200">
                {obj.teamName}
            </li>
        )
      })
} 
      </div>

    </ul>
    )
}





                   
                </li>
                <li className="mx-3 cursor-pointer">
                    Rankings
                </li>
              

            </ul>
        </div>
        <div className="mt-7">
            <input type="text"/>
            <button className="mx-1 p-1 text-white hover:bg-green-600 border rounded-md">Search</button>
        </div>
    </div>
  )
}

export default Header

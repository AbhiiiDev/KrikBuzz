export const  KEY='11ae9077acmsha499393bec2ab89p11f165jsnf82bdc55d078';
export const  HOST= 'cricbuzz-cricket.p.rapidapi.com';

import axios from "axios";





export async function FETCH_IMG(IMG_ID)
{
 
    const options = {
        method: 'GET',
        url: `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${IMG_ID}/i.jpg`,
        headers: {
          'X-RapidAPI-Key':KEY,
          'X-RapidAPI-Host': HOST
        },
        responseType: 'arraybuffer' 
      };

    try {
     const response= await axios.request(options);
    //  console.log(response.data)
        return (await response).data;

    } catch (error) {
        console.log(error)
    }

  }
  

  // THIS IS THE FUNCTION TO SHOW TIME LIKE : 5HR AGO , 9HR AGO ETC
  
  export function formatTimeAgo(timestamp) {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - timestamp;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
  
    if (seconds < 60) {
      return `${seconds}s ago`;
    } else if (minutes < 60) {
      return `${minutes}m ago`;
    } else {
      return `${hours}h ago`;
    }
  }

  
     
    
export const  KEY='11ae9077acmsha499393bec2ab89p11f165jsnf82bdc55d078';
export const  HOST= 'cricbuzz-cricket.p.rapidapi.com';

import axios from "axios";





export async function FETCH_IMG(IMG_ID)
{
    // const img=await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/${IMG_ID}/i.jpg`)
    // return img;
    const options = {
        method: 'GET',
        url: `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/${IMG_ID}/i.jpg`,
        headers: {
          'X-RapidAPI-Key':KEY,
          'X-RapidAPI-Host': HOST
        }
      };

    try {
     const response= await axios.request(options).then(response=>console.log(response) );
     console.log(response.data)
        return  (await response).data;

    } catch (error) {
        console.log(error)
    }

} 
     
    
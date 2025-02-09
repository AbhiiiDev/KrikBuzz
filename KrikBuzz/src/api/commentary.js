import axios from 'axios';
import { KEY,HOST } from '../constants/constants';
export const  getData= async(id)=>{

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
      console.log('res','trying')
      console.log('res',response.data);
 return {
    matchHeader: response.data.matchHeader,
      commentaryList: response.data.commentaryList,

 }    
    } catch (error) {
      console.error(error);
    }
    }

import axios from 'axios';
import { KEY,HOST } from '../constants/constants';
// get news category api call
export const getNewsCategory = async () => {

    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/news/v1/cat",
      headers: {
        "X-RapidAPI-Key": KEY,
        "X-RapidAPI-Host": HOST,
      },
    };

    try {
      const response = await axios.request(options);
      //   console.log(response.data.storyType[0].name);
    return response.data.storyType;
    } catch (error) {
      console.error(error);
    }
  };
// Navbar get team list api call
   export const getTeamList = async () => {
      const options = {
        method: "GET",
        url: "https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international",
        headers: {
          "X-RapidAPI-Key": KEY,
          "X-RapidAPI-Host": HOST,
        },
      };
      try {
        const response = await axios.request(options);
  
       return response.data.list;
      } catch (error) {
        console.error(error);
      }
    };


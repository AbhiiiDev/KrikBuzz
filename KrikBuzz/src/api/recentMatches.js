import axios from "axios";
import { KEY,HOST } from '../constants/constants';

export const getMatches = async () => {
  const options = {
    method: "GET",
    url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  try {
    const response = await axios.request(options);
    console.log('res',response.data?.typeMatches)
    return response.data?.typeMatches; // Default to an empty array if undefined
  } catch (error) {
    console.error("Error fetching matches:", error);
  }
};

import React, { useEffect, useState } from 'react'
import { HOST, KEY } from '../constants/constants';
import axios from 'axios';
import NewsHeadlines from '../components/NewsHeadlines';

const NewsContainer = () => {



  const [news,setNews]=useState([]);

useEffect(()=>{
  fetchNews();
},[])


const fetchNews=async()=>{

const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
  headers: {
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': HOST,
  }
};

try {
	const response = await axios.request(options);
const json=await response.data;

setNews(json.storyList);


} catch (error) {
	console.error(error);
}

}


  return (
    <div className='bg-gray-300 mx-2'>

<NewsHeadlines newsData={news}/>

      {
        // NEWS HEADLINE     BROAD NEWS CARDS    NEWS NORMAL CARDS

     
      }
    </div>
  )
}

export default NewsContainer

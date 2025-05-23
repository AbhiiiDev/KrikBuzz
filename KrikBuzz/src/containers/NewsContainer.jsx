import { useEffect, useState } from "react";
import { HOST, KEY } from "../constants/constants";
import axios from "axios";
import NewsHeadlines from "../components/NewsHeadlines";
import NewsCard from "../components/NewsCard";

const NewsContainer = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/news/v1/index",
      headers: {
        "X-RapidAPI-Key": KEY,
        "X-RapidAPI-Host": HOST,
      },
    };

    try {
      const response = await axios.request(options);
      const json = await response.data;

      setNews(json.storyList);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredNews = news.filter((obj) => {
    return "story" in obj;
  });

  return (
    <div className="bg-gray-300 flex">
      <div className="hidden md:block">
      <NewsHeadlines newsData={news} />
      </div>

      <div className="mb-2 p-2 w-full sm:w-1/2">
        {filteredNews.map((obj) => {
          return <NewsCard key={obj.id} info={obj} />;
        })}
      </div>
    </div>
  );
};

export default NewsContainer;

import PropTypes from 'prop-types'
import { formatTimeAgo } from '../constants/constants';


const NewsHeadlines = ({newsData}) => {

    // THIS IS EXCLUDING ALL THE OBJECT WITH KEY 'AD'

    const filteredNews=newsData.filter(obj=>{
        return 'story' in obj
    });


    return (
      filteredNews.length > 0 && ( // Render only if there is news
        <div className='bg-white border my-2 w-52 p-2'>
          <p className='text-[#09ae84] font-bold text-xl m-2'>Latest News</p>
          <div className='m-1'>
            {filteredNews.map((obj) => (
              <div key={obj.id}>
                <div className='m-2 font-medium text-[14px]'>
                  {obj.story.hline}
                  <p className='my-1 font-light text-[13px]'>
                    {formatTimeAgo(obj.story.pubTime)}
                  </p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )
    );
    
}

NewsHeadlines.propTypes = {
    newsData: PropTypes.array.isRequired, // Adjust the prop type as needed
  };

export default NewsHeadlines

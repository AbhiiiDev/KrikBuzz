import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { formatTimeAgo } from '../constants/constants';


const NewsHeadlines = ({newsData}) => {

    // THIS IS EXCLUDING ALL THE OBJECT WITH KEY 'AD'

    const filteredNews=newsData.filter(obj=>{
        return 'story' in obj
    });
    console.log(filteredNews)

  return (
    <div className='bg-white border my-2 w-52'>
      <p className='text-[#09ae84] font-bold text-xl m-2'>
        Latest News
      </p>
      <div className='m-1'>
        {
            filteredNews.map((obj)=>{
                return (
                    <>
                          <div className='m-2 font-medium text-[14px]' key={obj.id}>
                        {obj.story.hline}
                       
                        <p className='my-1 font-light text-[13px] ' key={obj.id}>

                        {
                        // THIS IS SHOWING TIME PUBLISHED LIKE : 5HR AGO 9HR AGO 
                        }
                                {formatTimeAgo(obj.story.pubTime)} 
                        </p>
                        </div>
                        <hr/>
                        </> 
                )
            })
        }

      </div>
    </div>
  )
}

NewsHeadlines.propTypes = {
    newsData: PropTypes.array.isRequired, // Adjust the prop type as needed
  };

export default NewsHeadlines

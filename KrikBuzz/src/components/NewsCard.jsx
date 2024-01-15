import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import { arrayBufferToBase64,FETCH_IMG } from '../constants/constants';

const NewsCard = ({info}) => {

 

console.log(info)

const [img,setImg]=useState(null);

const {hline,context,intro, imageId}=info.story;


console.log(imageId)

useEffect(() => {
  const fetchImages = async () => {
    try {
      const imageData = await FETCH_IMG(imageId);
      setImg(imageData);

    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  fetchImages();
}, [imageId]);


  return (

    <div className='bg-white w-[550px] mx-2 p-2'>
      <p className='text-sm mx-2 font-light'>{context.toUpperCase()}</p>
      <div>
      <img
                  className="w-[450px] h-[250px] mx-2 p-1 my-2  rounded-lg"
                  src={`data:image/jpeg;base64,${arrayBufferToBase64(img)}`}
                  alt="news"
                />
      </div>
      <h3 className='mx-2 font-bold text-[24px]'>
        {hline}
      </h3>
      <p className='mx-2 my-2 text-[#666]'>
        {intro}
      </p>
      <p className=''>
      <hr/>
      </p>
  </div>
   
  )
}

NewsCard.propTypes = {
  info: PropTypes.object.isRequired,
};


export default NewsCard

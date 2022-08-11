import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';

const StarRating = ({rating}:any) => {
  const stars = [];
  
  for(let i = 1; i <=5; i++){
    if(i <= rating) {
        stars.push(<AiFillStar key={i}/>);
    } 
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
         stars.push(<BsStarHalf key={i}/>)
    }
    else {
        stars.push(<AiOutlineStar key={i}/>);
    }
  }

  return (
    <>
      {stars} 
    </>
  )
}

export default StarRating
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Stars({
  rating,
  displayRating = false,
}: {
  rating: number | string | undefined;
  displayRating?: boolean;
}) {
  // handel stars
  const totalStars = 5;
  let newRate: number | string | any = typeof rating === 'string' ? parseFloat(rating) : rating;
  const fullStars = Math.floor(newRate);
  return (
    <div className='flex gap-2 items-center flex-row'>
      {Array.from({ length: totalStars }).map((_, index) => {
        if (index < fullStars) {
          return (
            <span
              key={index}
              className='my-auto pb-1'
            >
              <FaStar className='text-yellow-500 my-auto text-xs md:text-base lg:text-base' />
            </span>
          );
        } else {
          return (
            <span
              key={index}
              className='my-auto pb-1'
            >
              <FaStar className='text-gray-400 my-auto text-xs md:text-base lg:text-base' />
            </span>
          );
        }
      })}
      {displayRating && rating !== undefined && `(${rating})`}
    </div>
  );
}

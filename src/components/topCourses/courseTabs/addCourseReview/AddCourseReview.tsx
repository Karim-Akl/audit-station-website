'use client';
import * as React from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewTextArea from './reviewTextArea/ReviewTextArea';

const AddCourseReview = ({ setIsCommentAreaOpen }: any) => {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState<number | null>(null);

  return (
    <>
      <h1 className='my-4 font- placeholder:'>Select Rate</h1>
      <div className='flex gap-2 '>
        {[1, 2, 3, 4, 5].map((star, index) => {
          const currentRating = hover || rating;
          return (
            <button
              key={index}
              type='button'
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
            >
              <FaStar
                className={star <= currentRating ? 'text-yellow-500' : 'text-gray-400'}
                size={30}
              />
            </button>
          );
        })}
      </div>
      <h1 className='my-6 font-medium'>
        Review <span className='text-red-500'>*</span>
      </h1>
      <div className='w-full flex flex-col gap-2'>
        <ReviewTextArea />
        <button className=' mx-2 mt-10 rounded-xl bg-[#22B9DD] hover:bg-[#22b8dd7a] text-white p-2 w-full'>
          Submit
        </button>
        <button
          className=' mx-2 rounded-xl bg-red-500 hover:bg-red-600 text-white p-2 w-full'
          onClick={() => setIsCommentAreaOpen(false)}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default AddCourseReview;

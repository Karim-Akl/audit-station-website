'use client';

import { useState } from 'react';
import { Textarea } from '../ui/textarea';

const Reply = () => {
  const [isReplyAreaOpen, setIsReplyAreaOpen] = useState(false);
  return (
    <div className='w-full mt-2 lg:mt-0'>
      <button onClick={() => setIsReplyAreaOpen(!isReplyAreaOpen)}>Reply</button>
      {isReplyAreaOpen && (
        <>
          <div className='w-full relative lg:-left-48 my-4'>
            <Textarea
              name='message'
              placeholder='Enter your reply'
              className='min-h-[100px]'
              // value={inputsData.message}
              // onChange={handleInputChange}
            />
            <button>send</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Reply;

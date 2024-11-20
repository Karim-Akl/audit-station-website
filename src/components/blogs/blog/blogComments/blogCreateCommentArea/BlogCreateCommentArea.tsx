'use client';

import { Textarea } from '@/components/ui/textarea';
import { BASE_URL } from '@/lib/actions/actions';
import { modifyData } from '@/lib/api/modifyData';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';

const BlogCreateCommentArea = ({ authorImage, blogId, token }: any) => {
  const [commentContent, setCommentContent] = useState('');
  const handleCommentCreate = async () => {
    try {
      const response = await modifyData({
        endPoint: '/api/public/comments',
        method: 'POST',
        data: {
          id: blogId,
          content: commentContent,
        },
        token: token,
      });
      if (response) {
        toast.success('Comment Added successfully');
        await axios.get(`${BASE_URL}/api/public/comments?commentable_id=${blogId}`);
        window.location.reload();
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className='mt-12'>
        <h3 className='mb-4'>Leave Your Comment</h3>
        <div className='flex'>
          <div className='w-24 h-24 rounded-full'>
            <Image
              src={authorImage}
              alt='author'
              width={60}
              height={60}
              className='rounded-full'
            />
          </div>
          <Textarea
            name='message'
            placeholder='Enter your message'
            className='min-h-[100px]'
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />{' '}
        </div>
      </div>
      <button
        className='mt-4 w-full text-center bg-[#22B9DD] text-white py-3 rounded-lg'
        onClick={handleCommentCreate}
      >
        send
      </button>
    </>
  );
};

export default BlogCreateCommentArea;

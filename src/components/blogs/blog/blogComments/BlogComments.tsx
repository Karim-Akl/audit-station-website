// 'use client';

// import ServerSideComponentsPagination from "@/components/pagination/ServerSideComponentsPagination";
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import BlogComment from './blogComment/BlogComment';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import toast from 'react-hot-toast';
import { useState } from 'react';

const BlogComments = ({ commentsData, authorImage, blogId, token }: any) => {
  // const [commentContent, setCommentContent] = useState('');

  // const handleCommentCreate = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${BASE_URL}/api/public/comments`,
  //       {
  //         id: blogId,
  //         content: commentContent,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     );

  //     if (response) {
  //       toast.success('Reply Added successfully');
  //       await axios.get(`${BASE_URL}/api/public/comments?commentable_id=${blogId}`);
  //       window.location.reload();
  //     }
  //   } catch (err: any) {
  //     toast.error(err.response.data.message);
  //   }
  // };

  return (
    <>
      <div>
        <h1 className='text-lg my-14'>Comments</h1>
        {commentsData?.map((comment: any) => (
          <BlogComment
            key={comment.id}
            comment={comment}
            blogId={blogId}
          />
        ))}

        {/* <div className='w-full flex justify-center mt-8'>
          <ServerSideComponentsPagination
            totalPages={commentsData?.meta?.last_page}
            currentPage={1}
          />
        </div> */}

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
              // value={commentContent}
              // onChange={(e) => setCommentContent(e.target.value)}
            />{' '}
          </div>
        </div>
        <button
          className='mt-4 w-full text-center bg-[#22B9DD] text-white py-3 rounded-lg'
          // onClick={handleCommentCreate}
        >
          send
        </button>
      </div>
    </>
  );
};

export default BlogComments;

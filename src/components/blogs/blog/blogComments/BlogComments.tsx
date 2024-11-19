import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import BlogComment from './blogComment/BlogComment';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { modifyData } from '@/lib/api/modifyData';
import BlogCreateCommentArea from './blogCreateCommentArea/BlogCreateCommentArea';
import { getSession } from 'next-auth/react';

const BlogComments = async ({ commentsData, authorImage, blogId, token, userId }: any) => {

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

  // const handleCommentCreate = async () => {
  //   const response = await modifyData({
  //     endPoint: '/api/public/comments',
  //     method: 'POST',
  //     data: {
  //       id: blogId,
  //       content: commentContent,
  //     },
  //   });

  //   if (response) {
  //     toast.success('Comment Added successfully');
  //     await axios.get(`${BASE_URL}/api/public/comments?commentable_id=${blogId}`);
  //     // window.location.reload();
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
            userId={userId}
            token={token}
          />
        ))}

        {/* <div className='w-full flex justify-center mt-8'>
          <ServerSideComponentsPagination
            totalPages={commentsData?.meta?.last_page}
            currentPage={1}
          />
        </div> */}

        <BlogCreateCommentArea authorImage={authorImage} blogId={blogId} token={token} />
      </div>
    </>
  );
};

export default BlogComments;

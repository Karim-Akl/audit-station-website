'use client';

import BlogCommentReplyArea from '@/components/blogs/blog/blogComments/blogComment/blogCommentContent/blogCommentReplyArea/BlogCommentReplyArea';
import BlogCommentActions from './blogCommentActions/BlogCommentActions';
import { formatDateTime } from '@/lib/date/formatDateTime';
import { useState } from 'react';

const BlogCommentContent = ({ comment, userId, token, blogId }: any) => {
  const [isReplyAreaOpen, setIsReplyAreaOpen] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [isUpdateContent, setIsUpdateContent] = useState(false);

  return (
    <>
      <div className='flex flex-col gap-4 w-full'>
        <div>
          <div className='flex w-full justify-between items-center'>
            <h1 className='text-lg'>{comment?.user?.name}</h1>
            {userId === comment?.user?.id && (
              <BlogCommentActions
                comment={comment}
                token={token}
                setIsReplyAreaOpen={setIsReplyAreaOpen}
                isReplyAreaOpen={isReplyAreaOpen}
                setReplyContent={setReplyContent}
                blogId={blogId}
                setIsUpdateContent={setIsUpdateContent}
              />
            )}
          </div>
          <p>{comment?.content}</p>
        </div>
        <div className='lg:flex gap-2 text-[#22B9DD] w-full'>
          <span className='text-[#90949C] me-2 lg:me-0'>{formatDateTime(comment?.created_at)}</span>
          <div>
            <span className='me-1'>{comment?.replies_count}</span>
            <span>Replies</span>
          </div>
          <BlogCommentReplyArea
            isReplyAreaOpen={isReplyAreaOpen}
            setIsReplyAreaOpen={setIsReplyAreaOpen}
            replyContent={replyContent}
            onReplyAreaContentChange={setReplyContent}
            setReplyContent={setReplyContent}
            token={token}
            commentId={comment?.id}
            blogId={blogId}
            isUpdateContent={isUpdateContent}
            setIsUpdateContent={setIsUpdateContent}
          />
        </div>
      </div>
    </>
  );
};

export default BlogCommentContent;

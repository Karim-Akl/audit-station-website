'use client';

import BlogCommentReplyArea from '@/components/blogs/blog/blogComments/blogComment/blogCommentContent/blogCommentReplyArea/BlogCommentReplyArea';
import BlogCommentActions from './blogCommentActions/BlogCommentActions';
import { formatDate } from '@/lib/date/formatDate';
import { useState } from 'react';
import { BASE_URL } from '@/lib/actions/actions';
import Image from 'next/image';

const BlogCommentContent = ({ comment, userId, token, blogId }: any) => {
  const [isReplyAreaOpen, setIsReplyAreaOpen] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [isUpdateContent, setIsUpdateContent] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [isRepliesVisible, setIsRepliesVisible] = useState(false);
  const [commentReplies, setCommentReplies] = useState([
    {
      id: 1,
      content: 'Comment 1',
    },
    {
      id: 2,
      content: 'Comment 1',
    },
    {
      id: 3,
      content: 'Comment 1',
    },
    {
      id: 4,
      content: 'Comment 1',
    },
  ]);

  const handleGetCommentReplies = async () => {
    setSelectedComment(comment?.id);
    setIsRepliesVisible(!isRepliesVisible);
    return;
    try {
      const response = await fetch(
        `${BASE_URL}/api/public/comments?commentable_id=${blogId}&parent_id=${comment?.id}`,
      );
      console.log('response: ', response);
      const data = await response.json();
      setCommentReplies(data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <span className='text-[#90949C] me-2 lg:me-0'>{formatDate(comment?.created_at)}</span>
          <div
            className='cursor-pointer'
            onClick={handleGetCommentReplies}
          >
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
        {isRepliesVisible &&
          selectedComment === comment?.id &&
          Array.isArray(commentReplies) &&
          commentReplies.length > 0 &&
          commentReplies?.map((reply) => {
            return (
              <div
                key={reply.id}
                className='flex gap-4'
              >
                {/* <BlogCommentReplies /> */}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BlogCommentContent;

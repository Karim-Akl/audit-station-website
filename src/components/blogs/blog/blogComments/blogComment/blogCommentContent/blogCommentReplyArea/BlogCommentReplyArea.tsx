'use client';

import toast from 'react-hot-toast';
import { Textarea } from '../../../../../../ui/textarea';
import { modifyData } from '@/lib/api/modifyData';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';

const BlogCommentReplyArea = ({
  isReplyAreaOpen,
  setIsReplyAreaOpen,
  replyContent,
  onReplyAreaContentChange,
  setReplyContent,
  token,
  commentId,
  blogId,
  isUpdateContent,
  setIsUpdateContent
}: any) => {
  const handleReplyCLick = () => {
    setIsUpdateContent(false)
    setIsReplyAreaOpen(!isReplyAreaOpen);
    setReplyContent('');
  };

  const handleReplyUpdate = async () => {
    if (isUpdateContent) {
      try {
        const response = await axios.patch(`${BASE_URL}/api/public/comments`, {
          id: commentId,        
          content: replyContent,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
  
  
        if (response) {
          toast.success('Comment updated successfully');
          setIsReplyAreaOpen(false)
          await axios.get(`${BASE_URL}/api/public/comments?commentable_id=${blogId}`);
          window.location.reload()
        }
      } catch (err: any) {
        toast.error(err.response.data.message);
      } 
    } 
    
    else {
      try {
        const response = await axios.post(`${BASE_URL}/api/public/comments`, {
          id: blogId,        
          content: replyContent,
          parent_id: commentId
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
  
        if (response) {
          toast.success('Reply Added successfully');
          setIsReplyAreaOpen(false)
          await axios.get(`${BASE_URL}/api/public/comments?commentable_id=${blogId}`);
          window.location.reload()
        }
      } catch (err: any) {
        toast.error(err.response.data.message);
      } 
    }
  };

  return (
    <div className='w-full mt-2 lg:mt-0'>
      <button onClick={handleReplyCLick}>Reply</button>
      {isReplyAreaOpen && (
        <>
          <div className='w-full relative lg:-left-48 my-4'>
            <Textarea
              name='message'
              placeholder='Enter your reply'
              className='min-h-[100px]'
              value={replyContent}
              onChange={(e: any) => onReplyAreaContentChange(e.target.value)}
            />
            <button onClick={handleReplyUpdate}>{isUpdateContent? 'Update': 'Send'}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogCommentReplyArea;

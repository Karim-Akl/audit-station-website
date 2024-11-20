'use client';

import { Textarea } from '../../../../ui/textarea';

const BlogCommentReplyArea = ({isReplyAreaOpen, setIsReplyAreaOpen, replyContent, onReplyAreaContentChange, setReplyContent}: any) => {

  const handleReplyCLick = () => {
    setIsReplyAreaOpen(!isReplyAreaOpen)
    setReplyContent('')
  }
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
            <button>send</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogCommentReplyArea;

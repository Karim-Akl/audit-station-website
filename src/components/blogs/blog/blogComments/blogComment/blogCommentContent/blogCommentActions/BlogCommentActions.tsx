'use client';

import { useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import toast from 'react-hot-toast';
import { modifyData } from '@/lib/api/modifyData';

interface BlogCommentActionsProps {
  comment: {
    id: number;
    content: string;
  };
  token: string;
  isReplyAreaOpen: boolean;
  setIsReplyAreaOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setReplyContent: React.Dispatch<React.SetStateAction<string>>;
  blogId: number
  setIsUpdateContent: React.Dispatch<React.SetStateAction<boolean>>
}

const BlogCommentActions: React.FC<BlogCommentActionsProps> = ({ comment, token, isReplyAreaOpen, setIsReplyAreaOpen, setReplyContent, blogId, setIsUpdateContent }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleReplyDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await modifyData({
        endPoint: '/api/public/comments',
        method: 'DELETE',
        queryParams: {id: String(comment?.id)},
        token: token,
      });

      if (response) {
        toast.success('Comment deleted successfully');
        await axios.get(`${BASE_URL}/api/public/comments?commentable_id=${blogId}`);
        window.location.reload()
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditIconClick = () => {
    setIsUpdateContent(true)
    setIsReplyAreaOpen(!isReplyAreaOpen)
    setReplyContent(comment?.content)
  }

  return (
    <div className='flex items-center gap-2'>
      <button
        className='bg-[#22B9DD] p-1 rounded-md'
        disabled={isDeleting}
        onClick={handleReplyDelete}
      >
        <RiDeleteBinFill color='#FFFFFF' />
      </button>
      {isDeleting && <span>Deleting...</span>}
      <button
        className='bg-[#22B9DD] p-1 rounded-md'
        onClick={handleEditIconClick}
      >
        <MdEdit color='#FFFFFF' />
      </button>
    </div>
  );
};

export default BlogCommentActions;

'use client';

import { useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { modifyData } from '@/lib/api/modifyData';
import { MdEdit } from 'react-icons/md';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import toast from 'react-hot-toast';

interface BlogCommentActionsProps {
  comment: {
    id: number;
    content: string;
  };
  token: string;
  isReplyAreaOpen: boolean;
  setIsReplyAreaOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setReplyContent: React.Dispatch<React.SetStateAction<string>>;
}

const BlogCommentActions: React.FC<BlogCommentActionsProps> = ({ comment, token, isReplyAreaOpen, setIsReplyAreaOpen, setReplyContent }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleReplyDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(`${BASE_URL}/api/public/comments?id=${comment?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // const response = await modifyData({
      //   endPoint: '/api/public/comments',
      //   method: 'DELETE',
      //   queryParams: {id: commentId},
      //   token: token,
      // });

      if (response) {
        window.location.reload();
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setIsDeleting(false);
    }
  };

  // const handleReplyEdit = async () => {
  //   setIsEditing(true);

  //   try {
  //     const response = await modifyData({
  //       endPoint: '/api/public/comments',
  //       method: 'PATCH',
  //       token: token,
  //     });

  //     if (response) {
  //       window.location.reload();
  //     }
  //   } catch (err: any) {
  //     toast.error(err.response.data.message);
  //   } finally {
  //     setIsEditing(false);
  //   }
  // };

  const handleEditIconClick = () => {
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
        disabled={isDeleting}
        onClick={handleEditIconClick}
      >
        <MdEdit color='#FFFFFF' />
      </button>
      {isEditing && <span>Editing...</span>}
    </div>
  );
};

export default BlogCommentActions;

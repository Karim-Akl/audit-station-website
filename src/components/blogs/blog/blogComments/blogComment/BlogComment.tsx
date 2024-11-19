// BlogComment.tsx (Server Component)
import Image from 'next/image';
import { getSession } from '@/lib/authSession';
import BlogCommentContent from './blogCommentContent/BlogCommentContent';
export const revalidate = 0;

const BlogComment = async ({ comment, blogId, userId, token }: any) => {

  return (
    <>
      <div
        key={comment.id}
        className='my-4'
      >
        <div className='mt-10 mx-6 flex gap-4'>
          <div className='w-24 h-24 rounded-full relative'>
            <Image
              src={comment?.user?.avatar}
              alt='author'
              layout='fill'
              className='rounded-full'
            />
          </div>
          <BlogCommentContent comment={comment} userId={userId} token={token} blogId={blogId} />
        </div>
      </div>
    </>
  );
};

export default BlogComment;

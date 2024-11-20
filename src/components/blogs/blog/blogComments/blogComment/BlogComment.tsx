// BlogComment.tsx (Server Component)
import Image from 'next/image';
import BlogCommentContent from './blogCommentContent/BlogCommentContent';
export const revalidate = 0;

const BlogComment = async ({ comment, blogId, userId, token }: any) => {
  return (
    <>
      <div
        className='my-4'
      >
        <div className='mt-10 mx-6 flex gap-4'>
          <div className='w-16 h-16 rounded-full relative'>
            <Image
              src={comment?.user?.avatar}
              alt='author'
              fill
              objectFit='cover'
              className='rounded-full'
            />
          </div>
          <BlogCommentContent
            comment={comment}
            userId={userId}
            token={token}
            blogId={blogId}
          />
        </div>
      </div>
    </>
  );
};

export default BlogComment;

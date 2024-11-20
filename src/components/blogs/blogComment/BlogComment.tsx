// BlogComment.tsx (Server Component)
import Image from 'next/image';
import { cookies } from 'next/headers';
import { decrypt } from '@/lib/authSession';
import BlogCommentContent from './blogCommentContent/BlogCommentContent';
export const revalidate = 0;

const BlogComment = async ({ comment }: any) => {
  const session = cookies().get('session')?.value;
  const data = await decrypt(session || '');
  console.log('data: ', data);
  const userId = data?.user?.data?.id;
  const token = data?.user?.data?.token;

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
          <BlogCommentContent comment={comment} userId={userId} token={token} />
        </div>
      </div>
    </>
  );
};

export default BlogComment;

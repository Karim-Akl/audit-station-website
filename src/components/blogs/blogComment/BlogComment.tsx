import Reply from '@/components/reply/Reply';
import { formatDateTime } from '@/lib/date/formatDateTime';
import Image from 'next/image';

const BlogComment = ({ comment }: any) => {
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
          <div className='flex flex-col gap-4 w-full'>
            <div className=''>
              <h1 className='text-lg'>{comment?.user?.name}</h1>
              <p>{comment?.content}</p>
            </div>
            <div className='lg:flex gap-2 text-[#22B9DD] w-full'>
              <span className='text-[#90949C] me-2 lg:me-0'>
                {formatDateTime(comment?.created_at)}
              </span>
              <span>{comment?.replies_count}Replies</span>
              <Reply />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComment;

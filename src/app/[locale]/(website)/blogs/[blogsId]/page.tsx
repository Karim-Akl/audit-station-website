import Image from 'next/image';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import { CiCalendarDate } from 'react-icons/ci';
import { formatDateTime } from '@/lib/date/formatDateTime';
import { CgProfile } from 'react-icons/cg';
import { IoMdTime } from 'react-icons/io';
import { FaRegCommentAlt } from 'react-icons/fa';
import { Textarea } from '@/components/ui/textarea';
import Reply from '@/components/reply/Reply';

interface BlogProps {
  params: {
    blogsId: number;
  };
}

export default async function instructorsDetailsPage({ params: { blogsId } }: BlogProps) {
  const course = await axios.get(`${BASE_URL}/api/public/blogs/${blogsId}`);
  const comments = axios.get(`${BASE_URL}/api/public/comments?commentable_id=${blogsId}`);
  const commentsData = (await comments)?.data?.data;
  const data = course?.data?.data;
  return (
    <div className='w-full h-full'>
      <div className=''>
        <div className=''>
          <Image
            src={data?.author?.image}
            alt='topCourse'
            width={0}
            height={0}
            layout='responsive'
            className='object-cover rounded-lg'
          />
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row gap-4 my-4'>
        <div className='flex items-center'>
          <CiCalendarDate
            color='#22B9DD'
            size={24}
          />
          <span className='ml-2 text-xs whitespace-nowrap'>{formatDateTime(data?.created_at)}</span>
        </div>
        <div className='flex items-center'>
          <CgProfile
            color='#22B9DD'
            size={20}
            className='me-2'
          />
          <span className='text-xs whitespace-nowrap'>By: {data?.author?.name}</span>
        </div>
        <div className='flex items-center'>
          <IoMdTime
            color='#22B9DD'
            size={20}
            className='me-2'
          />
          <span>{data?.minutes} Min Read</span>
        </div>
        <div className='flex items-center'>
          <FaRegCommentAlt
            color='#22B9DD'
            size={20}
          />
          <span></span>
        </div>
      </div>
      <h1 className='text-2xl font-bold mb-10'>{data?.title}</h1>
      <p>{data?.description}</p>
      <div className='flex items-center gap-4'>
        <div className='flex flex-col md:flex-row md:items-center mt-4 gap-2'>
          <h3 className='font-semibold'>Tags:</h3>
          {data?.tags?.map((tag: any) => (
            <span
              key={tag}
              className='bg-[#22B9DD] text-white px-3 py-2 rounded-full text-sm ms-2'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className='mt-20 mx-6 flex gap-4'>
        <div className='w-24 h-24 rounded-full'>
          <Image
            src={data?.author?.image}
            alt='author'
            width={0}
            height={100}
            layout='responsive'
            className='rounded-full'
          />
        </div>
        <div className=''>
          <h1 className='text-lg'>{data?.author?.name}</h1>
          <p>{data?.author?.description}</p>
        </div>
      </div>
      <div>
        <h1 className='text-lg my-14'>Comments</h1>
        {commentsData?.map((comment: any) => (
          <div
            key={comment.id}
            className='my-4'
          >
            <div className='mt-10 mx-6 flex gap-4'>
              <div className='w-24 h-24 rounded-full'>
                <Image
                  src={comment?.user?.avatar}
                  alt='author'
                  width={0}
                  height={0}
                  layout='responsive'
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
                  <span>{comment?.replies_count}</span>Replies
                  <Reply />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='mt-12'>
          <h3 className='mb-4'>Leave Your Comment</h3>
          <div className='flex'>
            <div className='w-24 h-24 rounded-full'>
              <Image
                src={data?.author?.image}
                alt='author'
                width={60}
                height={60}
                className='rounded-full'
              />
            </div>
            <Textarea
              name='message'
              placeholder='Enter your message'
              className='min-h-[100px]'
              // value={inputsData.message}
              // onChange={handleInputChange}
            />{' '}
          </div>
        </div>
        <button className='mt-4 w-full text-center bg-[#22B9DD] text-white py-3 rounded-lg'>
          send
        </button>
      </div>
    </div>
  );
}

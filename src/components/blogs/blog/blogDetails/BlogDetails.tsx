
import { CiCalendarDate } from 'react-icons/ci';
import { formatDateTime } from '@/lib/date/formatDateTime';
import { CgProfile } from 'react-icons/cg';
import { IoMdTime } from 'react-icons/io';
import { FaRegCommentAlt } from 'react-icons/fa';

const BlogDetails = ({data}: any) => {
    return (
        <>
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
            className='me-2'
          />
          <span>{data?.comments_count}</span>
        </div>
      </div>
        </>
    )
}

export default BlogDetails
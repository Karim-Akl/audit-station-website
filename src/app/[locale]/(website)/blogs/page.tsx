import React from 'react';
import Image from 'next/image';
import instractor from '@../../../public/assets/instractor.svg';
import { Card, CardContent } from '@/components/ui/card';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import { CiCalendarDate } from 'react-icons/ci';
import { formatDateTime } from '@/lib/date/formatDateTime';
import { CgProfile } from 'react-icons/cg';
import PaginationComponent from '@/components/pagination/PaginationComponent';


export const metadata = {
  title: 'Blogs',
  description: 'Blogs Page',
};
export default async function Blogs() {
  const blogs = axios.get(`${BASE_URL}/api/public/blogs`);
  const data = (await blogs)?.data?.data;
  console.log(blogs);

  return (
    <>
      <div className='w-full grid grid-cols-3 gap-3 mb-24'>
        {data.map((blog: any) => (
          <Card
            key={blog.id}
            className='relative  overflow-hidden p-0  bg-white'
          >
            <div className='absolute top-4 right-4 text-white bg-[#22B9DD] px-4 py-2 rounded-md  flex items-center justify-center text-xs whitespace-nowrap'>
              {blog.title}
            </div>

            <CardContent className='p-2'>
              <Image
                src={blog.image}
                width={100}
                height={100}
                alt={blog.name}
                className='w-full h-auto '
              />
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <div className='flex items-center'>
                    <span>
                      <CiCalendarDate
                        color='#22B9DD'
                        size={20}
                      />
                    </span>
                    <span className='ml-2 text-xs whitespace-nowrap'>
                      {formatDateTime(blog?.created_at)}
                    </span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <CgProfile
                      color='#22B9DD'
                      size={20}
                    />
                    <span className='text-xs whitespace-nowrap'>By: {blog?.author?.name}</span>
                  </div>
                </div>
                <span className='mt-2 font-semibold'>{blog?.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='w-full flex justify-center items-center'>
        <PaginationComponent />
      </div>{' '}
    </>
  );
}


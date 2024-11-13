'use client';

import { CiCalendarDate } from 'react-icons/ci';
import { formatDateTime } from '@/lib/date/formatDateTime';
import { CgProfile } from 'react-icons/cg';
import PaginationComponent from '@/components/pagination/PaginationComponent';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { AppDispatch, RootState } from '@/lip/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getBlogs } from '@/app/[locale]/(website)/blogs/blogsSlice/blogsSlice';

const BlogsComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const blogs = useSelector((state: RootState) => state.blogs.blogs);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(getBlogs({ page: currentPage, search }));
  };

  useEffect(() => {
    dispatch(getBlogs({ page: currentPage, search }));
  }, [dispatch, currentPage, search]);

  return (
    <>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-24'>
        {blogs &&
          blogs?.data &&
          blogs?.data?.map((blog: any) => (
            <Card
              key={blog.id}
              className='relative overflow-hidden p-0 bg-white'
            >
              <div className='absolute top-4 right-4 text-white bg-[#22B9DD] px-4 py-2 rounded-md flex items-center justify-center text-xs whitespace-nowrap'>
                {blog.title}
              </div>
              <CardContent className='p-2'>
                <Image
                  src={blog.image}
                  width={100}
                  height={100}
                  alt={blog.name}
                  className='w-full h-auto'
                />
                <div className='flex flex-col'>
                  <div className='flex flex-row md:flex-col lg:flex-row justify-between'>
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
                    <div className='flex items-center gap-1 md:my-2'>
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
        <PaginationComponent
          totalPages={blogs?.meta?.last_page}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default BlogsComponent;

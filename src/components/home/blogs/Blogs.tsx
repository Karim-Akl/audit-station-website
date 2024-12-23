import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import instractor from '@../../../public/assets/instractor.svg';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import { CiCalendarDate } from 'react-icons/ci';
import { formatDate } from '@/lib/date/formatDate';
import { CgProfile } from 'react-icons/cg';
import { fetchData } from '@/lib/api/fetchData';

export async function Blogs() {
  const locale = await getLocale();
  const data = await fetchData({ endPoint: '/api/public/blogs' });

  return (
    <div className=' relative w-full h-full py-20  m-auto border-red-500 '>
      <div className='flex items-center space-x-2 pl-4 pr-4 py-6'>
        <span className='block w-12 h-[2px] bg-blue-200'></span>
        <span className='text-blue-400 text-sm'>Blogs</span>
      </div>
      <h2 className='md:max-w-7xl pl-4 pr-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
        Latest News and Resources
      </h2>

      <Carousel
        opts={{
          align: 'start',
        }}
        className='overflow-hidden my-6  '
      >
        <CarouselContent className='ml-0 mr-0 '>
          {data?.map((blog: any) => (
            <CarouselItem
              key={blog.id}
              className='md:w-full px-4  rounded-lg  sm:basis-1/2 md:basis-1/3 xl:basis-1/5'
            >
              <Link
                href={`/${locale}/blogs/${blog.id}` || '/'}
                className='bg-white  rounded-2xl border-1 border-[#E2E8F0] '
              >
                <Card className='relative p-0  bg-white hover:border-6 hover:border-[#5C5C5C] hover:border-opacity-5 transition-all'>
                  {blog?.category?.name && (
                    <div className='absolute top-4 right-4 text-white bg-[#22B9DD] px-4 py-2 rounded-md  flex items-center justify-center'>
                      {blog?.category?.name.slice(0,10)}
                    </div>
                  )}
                  <CardContent className='p-2'>
                    <Image
                      src={blog.image}
                      width={100}
                      height={100}
                      alt={blog.title}
                      className='w-full h-auto '
                    />
                    <div className='flex justify-between py-2  items-center'></div>

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
                            {formatDate(blog?.created_at)}
                          </span>
                        </div>
                        <div className='flex items-center gap-1 md:my-2'>
                          <CgProfile
                            color='#22B9DD'
                            size={20}
                          />
                          <span className='text-xs whitespace-nowrap'>
                            By: {blog?.author?.name.slice(0, 15)}
                          </span>
                        </div>
                      </div>
                      <span className='mt-2 font-semibold'>{blog?.title}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='flex items-center justify-end'>
        <Link href={`/${locale}/blogs/blogs` || '/'}>
          {' '}
          <Button className='bg-transparent hover:bg-gray-200 hover:border border pe-0 md:h-14 md:mt-12 justify-between md:w-72 rounded-full border-[#22B9DD] text-[#22B9DD]'>
            <span>See More</span>
            <span className='rounded-full border p-3 border-[#22B9DD]'>
              <ArrowRight />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

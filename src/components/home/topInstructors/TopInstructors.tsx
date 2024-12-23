'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import prize from '@../../../public/assets/prize.svg';
import instractor from '@../../../public/assets/instractor.svg';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';

export function TopInstructors() {
  const locale = useLocale();
  const [selectedTab, setSelectedTab] = useState('all');
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const tabs = [
    { id: 1, title: 'All', value: 'all' },
    { id: 2, title: 'Development', value: 'development' },
    { id: 3, title: 'Management', value: 'management' },
    { id: 4, title: 'IT', value: 'it' },
    { id: 5, title: 'Business', value: 'business' },
    { id: 6, title: 'Accounting', value: 'accounting' },
  ];

  const instructors = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Software Engineer',
      rating: 4.5,
      students: 1200,
      imageUrl: instractor,
      category: 'development',
      flag: true,
    },
    {
      id: 2,
      name: 'Jane Doe',
      title: 'Product Manager',
      rating: 4.7,
      students: 1500,
      imageUrl: instractor,
      category: 'management',
      flag: false,
    },
    {
      id: 3,
      name: 'Alice Smith',
      title: 'IT Specialist',
      rating: 4.6,
      students: 1100,
      imageUrl: instractor,
      category: 'it',
      flag: false,
    },
    {
      id: 4,
      name: 'Bob Johnson',
      title: 'Business Analyst',
      rating: 4.8,
      students: 1300,
      imageUrl: instractor,
      category: 'business',
      flag: false,
    },
    {
      id: 5,
      name: 'Charlie Brown',
      title: 'Accountant',
      rating: 4.9,
      students: 1400,
      imageUrl: instractor,
      category: 'accounting',
      flag: true,
    },
    // ... other instructors
  ];

  return (
    <div className=' relative w-full h-full py-20'>
      <div className='flex items-center space-x-2  py-6 m-auto '>
        <span className='block w-12 h-[2px] bg-blue-200'></span>
        <span className='text-blue-400 text-sm'>Top Instructors</span>
      </div>
      <h2 className='md:max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
        Our Top Class & Expert Instructors in One Place
      </h2>
      <Tabs
        defaultValue={tabs[0].value}
        onValueChange={setSelectedTab}
        className=''
      >
        <div className='md:flex items-center justify-between'>
          <TabsList className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:border-b pt-14 md:pb-20 pb-36 md:my-10 '>
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='overflow-hidden md:my-6 my-2 pr-3  m-auto '
        >
          <CarouselContent className='m-auto '>
            {instructors
              .filter((instructor) => selectedTab === 'all' || instructor.category === selectedTab)
              .map((instructor) => (
                <CarouselItem
                  key={instructor.id}
                  className='md:w-full rounded-lg  sm:basis-1/2 md:basis-1/3 xl:basis-1/5  '
                >
                  <Link
                    href={`/${locale}/top-instructors/${instructor.id} || '/'`}
                    className='bg-white  rounded-2xl border-1 border-[#E2E8F0] '
                  >
                    <Card className='relative  p-0 hover:border-8 hover:border-[#5C5C5C] hover:border-opacity-5 transition-all'>
                      {instructor.flag && (
                        <div className='absolute  -top-1 right-0 text-white m-1  flex items-center justify-center hover:scale-105 '>
                          <Image
                            src={prize}
                            width={70}
                            height={70}
                            alt={'Instructor'}
                          />
                        </div>
                      )}
                      <CardContent className='p-2'>
                        <Image
                          src={instructor.imageUrl}
                          width={100}
                          height={100}
                          alt={instructor.name}
                          className='w-full py-2 '
                        />
                        <div className='py-4  '>
                          <div className='font-bold text-xl mb-2'>{instructor.name}</div>
                          <p className='text-gray-700 text-base'>{instructor.title}</p>
                        </div>
                        <div className='pt-4 pb-2 flex justify-between font-semibold border-t items-center'>
                          <div className='flex items-center'>
                            <svg
                              className='w-5 h-5 text-yellow-500'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path d='M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z' />
                            </svg>
                            <span className='ml-2'>{instructor.rating}</span>
                          </div>
                          <p className='text-sm  text-gray-600'>{instructor.students} Students</p>
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
      </Tabs>
    </div>
  );
}

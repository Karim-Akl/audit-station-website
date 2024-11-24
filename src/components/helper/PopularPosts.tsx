'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import instractor from '@../../../public/assets/instractor.svg';
import { Card, CardContent } from '@/components/ui/card';
import { CiCalendar } from 'react-icons/ci';
import Link from 'next/link';

export function PopularPosts() {
  return (
    <div className='w-full grid grid-cols-1 gap-3'>
      <h2 className='font-bold text-xl text-[#0F1A29] '>Popular Posts</h2>
      {instructors.map((instructor) => (
        <Link
          href={`${instructor.name}`}
          key={instructor.id}
        >
          <Card className='  overflow-hidden border-none bg-F5F5F5 shadow-none'>
            <CardContent className='p-0 flex w-full flex-col gap-4 lg:flex-row lg:gap-0'>
              <Image
                src={instructor.imageUrl}
                width={150}
                height={150}
                alt={instructor.name}
                className=' object-cover  '
              />
              <div className='flex flex-col justify-around ps-1 ms-2'>
                <div className='flex gap-2 items-center'>
                  <CiCalendar
                    color='#22B9DD'
                    size={22}
                  />
                  <p className='text-sm text-[#767676]'>{instructor.date}</p>
                </div>
                <div className='text-[16px] font-medium mb-2'>{instructor.name}</div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
const instructors = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet.',
    title: 'Software Engineer',
    rating: 4.5,
    date: '05 Jun, 2024',
    imageUrl: instractor,
    category: 'NEWS',
    flag: true,
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet.',
    title: 'Product Manager',
    rating: 4.7,
    date: '05 Jun, 2024',
    imageUrl: instractor,
    category: 'NEWS',
    flag: false,
  },

  // ... other instructors
];

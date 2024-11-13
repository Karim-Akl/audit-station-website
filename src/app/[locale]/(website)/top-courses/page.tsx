import React from 'react';
import Image from 'next/image';
import topCourse from '@../../../public/assets/topCourse.svg';
import { Card, CardContent } from '@/components/ui/card';
import Stars from '@/components/stars/Stars';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { getLocale } from 'next-intl/server';
import Link from 'next/link';

export const metadata = {
  title: 'top-courses',
  description: 'top-courses Page',
};

const courses = [
  {
    id: 1,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 2,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 3,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 4,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 5,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 6,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 7,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 8,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 9,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },
  {
    id: 10,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'By Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseTime: '22 Total Hours. 155',
    courseLevel: 'Lectures. Beginner',
    price: '$182.00',
  },

  // ... other courses
];
export default async function topCourses() {
  const locale = await getLocale();
  return (
    <div className='w-full grid grid-cols-3 gap-3'>
      {courses.map((course) => (
        <>
          <Link href={`/${locale}/top-courses/${course.id}`}>
            <Card
              key={course.id}
              className='relative  overflow-hidden p-0  bg-white'
            >
              <CardContent className='p-2'>
                <Image
                  src={course.imageUrl}
                  width={100}
                  height={100}
                  alt={course.name}
                  className='w-full h-auto '
                />
                <div className='flex flex-col gap-1 mt-3'>
                  <span className='text-lg font-semibold'>{course.name}</span>
                  <span>{course.instructor}</span>
                  <div className='flex items-center gap-2'>
                    <span>
                      {' '}
                      <Stars rating={course.rating} />
                    </span>
                    <span>({course.numberOfRatings} Ratings)</span>
                  </div>
                  <div className='flex justify-start gap-2'>
                    <span className='whitespace-nowrap text-sm'>{course.courseTime}</span>
                    <span className='whitespace-nowrap text-sm'>{course.courseLevel}</span>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <button className='px-3 py-2  bg-[#22B9DD] text-white rounded-full flex items-center justify-center gap-2 font-semibold shadow-sm shadow-black'>
                      Add To Cart
                      <MdOutlineArrowRightAlt size={20} />
                    </button>{' '}
                    <span className='font-semibold'>{course.price}</span>
                  </div>
                </div>
                <div className='flex justify-between py-2  items-center'>
                  <div className='flex items-center'></div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </>
      ))}
    </div>
  );
}

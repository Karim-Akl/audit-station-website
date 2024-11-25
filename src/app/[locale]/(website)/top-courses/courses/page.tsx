import React from 'react';
import topCourse from '@../../../public/assets/topcourse.svg';
import TopCoursesCard from '@/components/home/topCourses/topCoursesSection/topCoursesCard';
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
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 2,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 3,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 4,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 5,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 6,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 7,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 8,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 9,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },
  {
    id: 10,
    imageUrl: topCourse,
    name: 'Course Name.',
    instructor: 'Instructor Name ',
    rating: 4.5,
    numberOfRatings: 1200,
    courseDuration: '22',
    numberOfLectures: '155',
    courseLevel: 'Beginner',
    price: '$182.00',
  },

  // ... other courses
];

export default async function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mt-6'>
      {courses.map((course: any) => (
        <Link
          key={course.id}
          href=''
          // href={`/${locale}/top-courses/${course.id}`}
          className='bg-white rounded-2xl border-1 border-[#E2E8F0]'
        >
          <TopCoursesCard
            course={course}
            page='courses'
          />
        </Link>
      ))}
    </div>
  );
}

import topCourse from '@../../../public/assets/topcourse.svg';
import CoursesSwiper from './CoursesSwiper';

const TopCoursesSection = () => {
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
  ];

  return (
    <>
      <div className='flex flex-col gap-2 mt-6 ps-2 w-full'>
        <h1 className='text-2xl font-bold'>My Courses</h1>
        <p className='text-[#767676] mb-6'>Checkout my latest courses</p>
      </div>
      <div className='w-full'>
        <CoursesSwiper data={courses} />
      </div>
    </>
  );
};

export default TopCoursesSection;

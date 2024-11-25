import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Stars from '@/components/stars/Stars';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const TopCoursesCard = ({ course, page }: { course: any; page?: string }) => {
  return (
    <div className='w-full flex'>
      <Card
        key={course.id}
        className='p-0 bg-white shadow-md rounded-lg overflow-hidden'
      >
        <CardContent className='p-2'>
          <Image
            src={course.imageUrl}
            alt={course.name}
            width={300}
            height={200}
            className='w-full h-auto object-cover rounded-md'
          />
          <div className='flex flex-col gap-1 mt-3'>
            <span className='text-lg font-semibold'>{course.name}</span>
            <span className='text-sm text-gray-600'>By {course.instructor}</span>
            <div
              className={`flex items-center gap-2 ${
                page === 'courses'
                  ? 'md:flex-col md:items-start md:my-1 lg:flex-row md:items:center'
                  : ''
              }`}
            >
              <Stars rating={course.rating} />
              <span className='text-sm'>({course.numberOfRatings} Ratings)</span>
            </div>
            <div
              className={`flex gap-2 items-center ${
                page === 'courses' ? 'md:flex-col md:items-start lg:flex-row lg:flex-center' : ''
              }`}
            >
              <span className='text-sm'>{course.courseDuration} Total Hours</span>
              <span className='text-sm'>{course.numberOfLectures} Lectures</span>
              <span className='text-sm'>{course.courseLevel}</span>
            </div>
            <div className={`flex justify-between items-center mt-2`}>
              <button
                className={`${
                  page === 'courses' ? 'text-sm' : ''
                } px-3 py-2 bg-[#22B9DD] text-white rounded-full flex items-center gap-2 font-semibold shadow-md`}
              >
                Add To Cart
                <MdOutlineArrowRightAlt size={20} />
              </button>
              <span className='font-semibold'>{course.price}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopCoursesCard;

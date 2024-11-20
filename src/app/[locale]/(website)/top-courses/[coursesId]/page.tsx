import Image from 'next/image';
import topCourse from '../../../../../../public/assets/top-course/top-course.jpg';
import { FaStar } from 'react-icons/fa';
import instructor from '../../../../../../public/assets/top-course/instructor.jpg';
import { CiCalendarDate } from 'react-icons/ci';
import { RiGraduationCapLine } from 'react-icons/ri';
import CourseTabs from '../../../../../components/topCourses/courseTabs/CourseTabs';

interface BlogProps {
  params: {
    id: number;
  };
}

export default async function courseDetailsPage({ params: { id } }: BlogProps) {
  return (
    <div className='w-full h-full grid grid-cols-4 gap-4'>
      <div className='col-span-3'>
        <div className='relative'>
          <Image
            src={topCourse}
            alt='topCourse'
            height={500}
            width={0}
            layout='responsive'
            className='object-cover rounded-lg'
          />
        </div>
        <div className='mt-6'>
          <div className='flex items-center gap-4'>
            <span className='bg-[#EBEBEB] p-2 rounded-full'>Enstrumentals</span>
            <div className='flex items-center gap-2'>
              <FaStar
                size={20}
                color='#F8BC24'
              />
              <span>5.0 Reviews</span>
            </div>
          </div>
          <h1 className='text-2xl font-bold mt-2'>Modern Front-End Development with js</h1>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <div className='w-12 h-12 mt-2'>
                <Image
                  alt='instructor'
                  src={instructor}
                  className='w-full h-full rounded-full'
                />
              </div>
              <div className='flex items-center gap-4'>
                <span>By Ethan Granger</span>
                <div className='flex items-center gap-1'>
                  <CiCalendarDate
                    size={24}
                    color='#767676'
                  />
                  <span className='text-[#767676]'>04/Jul/2024</span>
                </div>
                <div className='flex items-center gap-2'>
                  <RiGraduationCapLine
                    size={24}
                    color='#767676'
                  />
                  <span className='text-[#767676]'>0 Students</span>
                </div>
              </div>
            </div>
          </div>
          <CourseTabs />
        </div>
      </div>

      <div className='col-span-1 border border-gray-200 h-fit'></div>
    </div>
  );
}

import Image from 'next/image';
import topCourse from '../../../../../../public/assets/top-course/top-course.jpg';
import { FaStar } from 'react-icons/fa';
import instructor from '../../../../../../public/assets/top-course/instructor.jpg';
import { CiCalendarDate } from 'react-icons/ci';
import { RiGraduationCapLine } from 'react-icons/ri';
import CourseTabs from '../../../../../components/topCourses/courseTabs/CourseTabs';
import TopCourseInformation from '@/components/home/topCourses/topCourse/topCourseInformation/TopCourseInformation';
import ShareCourse from '@/components/home/topCourses/topCourse/shareCourse';
import { IoIosArrowRoundForward } from 'react-icons/io';

interface BlogProps {
  params: {
    id: number;
  };
}

export default async function courseDetailsPage({ params: { id } }: BlogProps) {
  return (
    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-4 container'>
      <div className='lg:col-span-3'>
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
            <div className='flex flex-col items-start lg:flex-row lg:items-center gap-4 lg:gap-2'>
              <div className='w-12 h-12 mt-4 mb-2 lg:mb-0 lg:mt-2'>
                <Image
                  alt='instructor'
                  src={instructor}
                  className='w-full h-full rounded-full'
                />
              </div>
              <div className='flex flex-col items-start lg:flex-row lg:items-center gap-4'>
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

      <div className='lg:col-span-1 border border-gray-300 h-fit p-6 rounded-lg'>
        <div className='bg-[#22B9DD] text-white flex flex-col gap-4 p-6 rounded-xl'>
          <span>This Course Fee:</span>
          <span className='font-bold text-2xl'>$51.00</span>
        </div>
        <div className='flex flex-col gap-4 mt-4 px-2'>
          <p className='font-semibold'>Course includes:</p>
          <TopCourseInformation
            label='Level'
            data='Intermediate'
          />
          <TopCourseInformation
            label='Duration'
            data='50h'
          />
          <TopCourseInformation
            label='Lessons'
            data='28'
          />
          <TopCourseInformation
            label='Quizzes'
            data='7'
          />
          <TopCourseInformation
            label='Certifications'
            data='Yes'
          />
          <TopCourseInformation
            label='Language'
            data='Francais'
          />
        </div>
        <ShareCourse />
        <hr className='my-4' />
        <div className='w-full flex justify-center items-center my-6'>
          <button className='bg-[#22B9DD] rounded-full text-[#FFFFFF] px-10 py-3 font-semibold text-sm inline-flex items-center gap-1'>
            Add To Cart
            <IoIosArrowRoundForward
              size={20}
              color='#FFFFFF'
              className='font-bold'
            />
          </button>{' '}
        </div>
      </div>
    </div>
  );
}

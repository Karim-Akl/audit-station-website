import Image from 'next/image';
import instructor from '../../../../../../public/assets/top-course/instructor.jpg';
import { FaStar } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { FaSearchLocation, FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
//

const InstructorsSection = () => {
  return (
    <>
      <div className='mt-20 mx-6 flex gap-4'>
        <div className='w-24 h-24 lg:w-32 lg:h-32 rounded-full relative'>
          <Image
            src={instructor}
            alt='author'
            fill
            objectFit='cover'
            className='rounded-full'
          />
        </div>
        <div className='w-[calc(100%-8rem)]'>
          <h1 className='text-base font-semibold'>Jason Thorne</h1>
          <p className='text-sm my-3'>Developer</p>
          <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2'>
            <div className='flex items-center gap-2'>
              <FaStar
                size={16}
                color='#F8BC24'
              />
              <span>(5.0 Reviews)</span>
            </div>
            <div className='flex items-center gap-2'>
              <CiMail />
              <span>instructor@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaSearchLocation />
              <span>United States</span>
            </div>
          </div>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis doloribus
            error magni nisi dolorum cupiditate, eveniet reiciendis cumque consequatur magnam, enim
            soluta nulla sapiente vel, quaerat alias at consectetur?
          </p>
          <div className='grid grid-cols-3 sm:flex sm:items-center sm:justify-center sm:gap-8 gap-2 mt-6 sm:ms-4 p-2 sm:p-0'>
            <button className='border border-gray-100 rounded-full p-2'>
              <FaFacebookF />
            </button>
            <button className='border border-gray-100 rounded-full p-2'>
              <FaTwitter />
            </button>
            <button className='border border-gray-100 rounded-full p-2'>
              <FaLinkedin />
            </button>
            <button className='border border-gray-100 rounded-full p-2'>
              <FaGithub />
            </button>
            <button className='border border-gray-100 rounded-full p-2'>
              <FaLink />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsSection;

'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import aboutus from '@../../../public/assets/aboutus.svg';
import { VideoPlayer } from '@/components/helper/videoPlayer';
import { AppDispatch } from '@/lip/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutUs } from './aboutUsSlice/aboutUsSlice';
import FormattedText from '@/components/formattedText/FormattedText';

export const AboutUs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const aboutUs = useSelector((state: any) => state.aboutUs.aboutUs);
  console.log('aboutUs: ', aboutUs);

  useEffect(() => {
    dispatch(getAboutUs());
  }, []);

  return (
    <div className='w-full relative block md:flex flex-row-reverse items-center md:gap-40  py-20 px-4 md:px-0'>
      <div className='md:w-1/2 font-sans pl-4'>
        <div className='flex items-center space-x-2 font-normal  py-6'>
          <span className='block w-12 h-[2px] bg-blue-200'></span>
          <span className='text-blue-400 text-sm'>AboutUs</span>
        </div>
        <h2 className='max-w-7xl  mx-auto text-xl md:text-5xl font-bold text-[#0F1A29] dark:text-neutral-200 font-[Saira]'>
          {/* Who Is Audit Station ...?! */}
          {aboutUs?.title}
        </h2>
        <div className='flex flex-col  space-y-4 text-[#6D6C80] gap-10 my-10  text-md md:text-md font-normal '>
          <p className='  '>
            {/* We are one of the leading and most trusted accounting firms in the
            middle east. We redefine the Industry by our auditing and accounting
            solutions designed specially to meet your business needs. We do that
            while keeping a satisfaction rate of 100% by all our 200+ clients
            all over the world, sepcially in the GCC countries. */}
            <FormattedText htmlText={aboutUs?.description} />
          </p>
          <div className='w-full text-[#161439] flex flex-col gap-4 text-sm md:text-lg  font-semibold font-poppins'>
            {aboutUs?.items.map((item: any, index: number) => (
              <>
                <div
                  key={index}
                  className='flex items-center gap-2 '
                >
                  <ChevronRight className='p-1 text-black rounded-full bg-[#22B9DD]' />
                  {item}
                </div>
              </>
            ))}
          </div>
        </div>
        <Button className='bg-white hover:bg-gray-200 hover:border border pe-0 h-12   justify-between  w-72 rounded-full border-[#22B9DD] text-[#22B9DD]'>
          <span>Get More About Us</span>
          <span className='rounded-full border p-3 border-[#22B9DD]'>
            <ArrowRight />
          </span>
        </Button>
      </div>
      <div className='mt-10 md:mt-0 md:w-1/3 flex justify-center relative'>
        <div className='relative overflow-hidden rounded-full z-30  bg-gray-100'>
          <Image
            src={aboutus}
            alt='Image'
            width={80}
            height={80}
            className='object-cover h-full w-full'
          />

          <div className='absolute inset-0 flex justify-center z-30 items-center'>
            <VideoPlayer link={aboutUs?.youtube_link} />
          </div>
        </div>
        <div className='absolute md:bottom-6 left-0  md:w-96 w-72 h-96 rounded-full border border-blue-300 z-0 '></div>
        <div className='absolute  top-64 -left-10 md:w-72 h-72 rounded-full border border-blue-300 z-0'></div>

        <div className='absolute bottom-0 left-0 mb-4 ml-4 bg-white p-2 rounded-lg shadow-md z-30'>
          <div className='flex items-center space-x-2'>
            <svg
              className='w-6 h-6 text-blue-500'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm3 2h8v2H8V5zm0 4h8v2H8V9zm0 4h8v2H8v-2z' />
            </svg>
            <div>
              <span className='text-sm font-semibold text-gray-700'>Customers</span>
              <p className='text-xl font-bold'>5K+</p>
            </div>
          </div>
        </div>

        <div className='absolute top-0 left-0 mt-4 ml-4 md:ml-0 z-30'>
          <div className='bg-white p-2  rounded-full shadow-md'>
            <p className='text-sm font-semibold text-gray-700'>
              Apply for jobs to join the family of Audit Station experts!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

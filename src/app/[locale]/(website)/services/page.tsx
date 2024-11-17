import HeroBackground from '@/components/helper/HeroBackground';
import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import Image from 'next/image';
import blueCircle from '@/../public/assets/services/rightBlueCircle.svg';
import yellowCircle from '@/../public/assets/services/leftYellowCircle.svg';
import { topServicesItems } from '.';
import { bottomServicesItems } from '.';
import { BASE_URL } from '@/lib/actions/actions';
export const metadata = {
  title: 'Services',
  description: 'Services Page',
};
export default async function Services() {
  try {
    const res = await fetch(`${BASE_URL}/api/public/services`);
    if (!res.ok) {
      throw new Error('Failed to fetch Services');
    }

    const data = await res.json();
    const services = data?.data || [];

    return (
      <main className='mb-20'>
        <HeroBackground title='Services' />
        <div className='mx-[2%] mt-10 relative'>
          <div className='absolute top-0 right-[-2%] -z-10'>
            <Image
              src={blueCircle}
              alt='blue circle'
            />
          </div>
          <div className='absolute bottom-[-90px] left-[-2%] -z-10'>
            <Image
              src={yellowCircle}
              alt='yellow circle'
            />
          </div>
          <p className='font-bold text-center w-[95%] mb-5 mx-auto'>
            We provide comprehensive solutions for accounting, instructor management, student
            engagement, and employment services, all in one streamlined platform designed to enhance
            efficiency, collaboration, and success.{' '}
          </p>
          <div className='my-6 grid lg:grid-cols-4 md:grid-cols-3 '>
            {services?.map((service: any, index: any) => {
              return (
                <div
                  className='border border-[#F4F4F4] py-6 px-4'
                  style={{
                    backgroundColor: index % 2 === 0 ? 'white' : '#F4F4F4',
                  }}
                  key={service?.id}
                >
                  <div className='w-[100px] h-[100px] relative mx-auto'>
                    <Image
                      src={service?.image}
                      alt='logo'
                      layout='fill'
                      className='object-cover rounded-full'
                      width={0}
                    />
                  </div>
                  <h4 className='text-center font-semibold mt-3'>{service?.title}</h4>
                  <p className='mt-8 text-center'>{service?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
}

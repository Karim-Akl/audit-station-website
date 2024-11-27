import HeroBackground from '@/components/helper/HeroBackground';
import React from 'react';

import Image from 'next/image';
import blueCircle from '@/../public/assets/services/rightBlueCircle.svg';
import yellowCircle from '@/../public/assets/services/leftYellowCircle.svg';
import { fetchData } from '@/lib/api/fetchData';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
export const metadata = {
  title: 'Services',
  description: 'Services Page',
};
export default async function Services() {
  const locale = await getLocale();
  const services = await fetchData({ endPoint: `/api/public/services` });
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
              <>
                <Link
                  href={`/${locale}/services/${service.id}` || '/'}
                  key={service?.id}
                >
                  <div
                    className='border border-[#F4F4F4] py-6 px-4'
                    style={{
                      backgroundColor: index % 2 === 0 ? 'white' : '#F4F4F4',
                    }}
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
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}

import HeroBackground from '@/components/helper/HeroBackground';
import Image from 'next/image';
import React from 'react';
import banner from '@/../public/assets/about/logoBanner.svg';
import TitleSubtitle from '@/components/aboutUs/TitleSubtitle';
import yellowCircle from '@/../public/assets/leftYellowCircle.svg';
import { BASE_URL, revalidateTime } from '@/lib/constants/constants';
import { GetDataInServerSide } from '@/lib/actions/ServerActions';
import axios from 'axios';
import { IoLogoYoutube } from 'react-icons/io';
import { Link } from 'lucide-react';
import { VideoPlayer } from '@/components/helper/videoPlayer';
import aboutUsImage from '@../../../public/assets/aboutus.svg';

export const metadata = {
  title: 'About',
  description: 'About Page',
};

export default async function About() {
  const aboutUs = await axios.get(`${BASE_URL}/api/public/about_us`);
  const { data, message } = await GetDataInServerSide({
    End_Point: `/public/about_us`,
    ISAddAuthHeaders: false,
    ExtraMethod: {
      next: { revalidate: revalidateTime }, // Revalidate every 5 minutes
    },
  });

  // if (!data) {
  //   return (
  //     <p className='flex h-screen w-full items-center justify-center bg-secondary-500 font-coachella text-4xl text-primary-400 md:text-[72px] '>
  //       {message}
  //     </p>
  //   );
  // }
  return (
    <div className='mb-20'>
      <HeroBackground title='about us' />
      <div className='mx-[2%] mt-10'>
        <Image
          src={banner}
          alt='banner'
          className='w-full'
          loading='lazy'
        />
        <div className='mt-10'>
          <TitleSubtitle
            title={aboutUs?.data?.data?.title}
            subTitle={aboutUs?.data?.data?.description}
          />
          <div className='relative w-full h-[350px]'>
            <Image
              src={yellowCircle}
              alt='yellow circle'
              className='absolute right-[-2%] bottom-0 h-[500px]'
            />
            <div className='relative rounded-xl w-full h-full shadow-lg'>
              <Image
                src={aboutUsImage}
                alt='Image'
                layout='fill'
                className='object-cover h-full w-full'
              />
              {/* <div className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center gap-2'>
                <IoLogoYoutube
                  size={44}
                  color='#FF0000'
                />
                <span className='text-2xl font-bold'>YouTube</span>
              </div> */}
              <div className='absolute inset-0 flex justify-center z-30 items-center'>
                <VideoPlayer link={aboutUs?.data?.data?.youtube_link} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

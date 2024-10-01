import HeroBackground from '@/components/HeroBackground'
import Image from 'next/image'
import React from 'react'
import banner from '@/../public/assets/about/logoBanner.svg'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import TitleSubtitle from '@/components/aboutUs/TitleSubtitle'

export default function About() {
   return (
      <div className='mb-20'>
         <HeroBackground
            title='about us'
            pageRoute={<>home <MdOutlineArrowForwardIos /> about us</>}
         />
         <div className="mx-[2%] mt-10">
            <Image src={banner} alt='banner' className='w-full' loading='lazy' />
            <div className="mt-10">
               <TitleSubtitle
                  title='Who is Audit Station     . . . ?!'
                  subTitle='Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet'
               />
               <TitleSubtitle
                  title='Our Mission'
                  subTitle='Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'
               />
               <TitleSubtitle
                  title='What We Offer'
                  subTitle='Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'
               />
               <div className="rounded-xl bg-[#E6F7F9] w-full h-72"></div>
            </div>
         </div>
      </div>
   )
}

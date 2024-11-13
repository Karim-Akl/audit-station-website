'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';
import prize from '@../../../public/assets/prize.svg';
import HeroBackground from '../helper/HeroBackground';
import teamMember from '../../../public/assets/our-team/team-member.jpg';
import { AppDispatch, RootState } from '@/lip/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'http';
import { getOurTeam } from './ourTeamSlice/ourTeamSlice';
import PaginationComponent from '../pagination/PaginationComponent';
import { motion } from 'framer-motion';

export function OurTeamComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const ourTeam = useSelector((state: RootState) => state.ourTeam.ourTeam);
  console.log('ourTeam: ', ourTeam);

  useEffect(() => {
    dispatch(getOurTeam({ page: currentPage, search }));
  }, [dispatch, currentPage, search]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(getOurTeam({ page: currentPage, search }));
  };

  return (
    <div className='container'>
      <HeroBackground title='Our Team' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16'>
        {ourTeam &&
          ourTeam?.data &&
          ourTeam?.data?.map((member) => (
            <Card
              key={member.id}
              className='relative overflow-hidden p-0 bg-white'
            >
              <CardContent className='p-2'>
                <Image
                  src={member.image}
                  width={100}
                  height={100}
                  alt={member.name}
                  className='w-full h-auto'
                />
                <div className='flex flex-col ps-2'>
                  <span className='my-2 font-semibold'>{member?.name}</span>
                  <span className='font-semibold'>{member?.section?.title}</span>
                </div>
                <div className='absolute top-0 right-0 z-40 w-12 hover:w-full transition-all duration-300 ease-in-out p-6 background-team h-full'>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    {member.name}
                  </motion.p>
                  <motion.p className='text-white text-xl md:text-2xl font-normal max-w-xs text-left [text-wrap:balance] font-sans mt-2'>
                    {member?.section?.title}
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
      <div className='w-full flex justify-center items-center'>
        <PaginationComponent
          totalPages={ourTeam?.meta?.last_page}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import HeroBackground from '../helper/HeroBackground';
import { AppDispatch, RootState } from '@/lip/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getOurTeam } from './ourTeamSlice/ourTeamSlice';
import PaginationComponent from '../pagination/PaginationComponent';
import { motion } from 'framer-motion';
//
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaSnapchat } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export function OurTeamComponent() {
  const router = useRouter();
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
                <div className='flex flex-col ps-2 mb-12'>
                  <span className='my-2 font-semibold'>{member?.name}</span>
                  <span className='font-semibold'>{member?.section?.title}</span>
                </div>
                <div className='absolute bottom-0 z-40 h-16 hover:h-full transition-all duration-300 ease-in-out p-6 w-full background-team flex justify-around'>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    <button onClick={() => router.push(`${member?.facebook}`)}>
                      <FaFacebook />
                    </button>
                  </motion.p>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    <button onClick={() => router.push(`${member?.instagram}`)}>
                      {' '}
                      <FaInstagram />
                    </button>
                  </motion.p>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    <button onClick={() => router.push(`${member?.twitter}`)}>
                      <FaTwitter />
                    </button>
                  </motion.p>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    <button onClick={() => router.push(`${member?.telegram}`)}>
                      <FaTelegram />
                    </button>
                  </motion.p>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    <button onClick={() => router.push(`${member?.whatsapp}`)}>
                      <FaWhatsapp />
                    </button>
                  </motion.p>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    <button onClick={() => router.push(`${member?.snapchat}`)}>
                      <FaSnapchat />
                    </button>
                  </motion.p>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    <button onClick={() => router.push(`${member?.tiktok}`)}>
                      <FaTiktok />
                    </button>
                  </motion.p>
                  <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
                    <button onClick={() => router.push(`${member?.github}`)}>
                      <FaGithub />
                    </button>
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

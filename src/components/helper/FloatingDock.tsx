import React from 'react';
import { IconBrandFacebook } from '@tabler/icons-react';
import { FaTiktok, FaLinkedin, FaSnapchat, FaYoutube, FaFacebook } from 'react-icons/fa';

import Image from 'next/image';
import { FloatingDock } from '../ui/floating-dock';

export function FloatingDockDemo({ data }: any) {
  const links = [
    {
      title: 'Facebook',
      icon: <FaFacebook className='h-full w-full text-neutral-500 dark:text-neutral-300' />,
      href: data?.facebook,
    },
    {
      title: 'Linkedin',
      icon: <FaLinkedin className='h-full w-full text-neutral-500 dark:text-neutral-300' />,
      href: data?.linkedin,
    },
    {
      title: 'Tiktok',
      icon: <FaTiktok className='h-full w-full text-neutral-500 dark:text-neutral-300' />,
      href: data?.tiktok,
    },
    {
      title: 'Youtube',
      icon: <FaYoutube className='h-full w-full text-neutral-500 dark:text-neutral-300' />,
      href: data?.youtube,
    },
    {
      title: 'Snapchat',
      icon: <FaSnapchat className='h-full w-full text-neutral-500 dark:text-neutral-300' />,
      href: data?.snapchat,
    },
  ];
  return (
    <div className='flex items-center justify-center  w-full'>
      <FloatingDock
        mobileClassName='translate-y-20' // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

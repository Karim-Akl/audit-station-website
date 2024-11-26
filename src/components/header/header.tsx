'use client';

import React, { useEffect, useState } from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { CiFacebook, CiLinkedin, CiYoutube } from 'react-icons/ci';
import { RiTiktokLine } from "react-icons/ri";
import { FaSnapchat } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import UseSearchParamsHook from '@/hooks/UseSearchParamsHook';
import { useTheme } from 'next-themes';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import Link from 'next/link';
import Image from 'next/image';
export const Header: React.FC = () => {
  const [settings, setSettings] = useState<any>(null);
  const { router } = UseSearchParamsHook();
  const { theme } = useTheme();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/public/settings`);
        setSettings(response?.data?.data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };
    fetchSettings();
  }, []);

  const handleChangeLanguage = (value: string) => {
    router.push(`/${value}`);
  };

  const handleChangeCurrency = (value: string) => {
    console.log('Currency changed to:', value);
  };

  if (!settings) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-[#eee]'}`}>
      <div className='container w-full flex-col justify-center items-start gap-2.5'>
        <div className='md:container self-stretch md:justify-between items-center md:inline-flex'>
          <div className='justify-start items-center gap-8 flex'>
            <div className='md:justify-start justify-center items-center gap-1 flex'>
              {/* <FaMapLocationDot size={20} /> */}
              <Link href={settings ? settings.snapchat : ''}>
                <Image src="/assets/home/Vector.jpg" alt="instagram"  width={20} height={20} />
                </Link>
              <div className='md:text-[13px] text-[10px] md:font-medium'>{settings?.address}</div>
            </div>
            <div className='md:justify-start justify-center items-center gap-1 flex'>
              <MdOutlineMail size={20} />
              <div className='md:text-[13px] text-[10px] md:font-medium'>{settings?.email}</div>
            </div>
          </div>
          <div className='md:justify-start justify-around items-center md:gap-12 md:flex hidden'>
            <div className='md:justify-start justify-center items-center md:gap-2 md:flex'>
              <div className='text-[13px] font-medium font-sans'>Follow Us On :</div>
              <div className='justify-start items-center gap-1 flex'>
                <Link href={settings ? settings.facebook : ''}>
                  <CiFacebook size={24} />
                </Link>
                <Link href={settings ? settings.linkedin : ''}>
                  <CiLinkedin size={24} />
                </Link>
                {/* <Link href={settings ? settings.tiktok : ''}>
                  <RiTiktokLine size={24} />
                </Link> */}
                <Link href={settings ? settings.snapchat : ''}>
                <Image src="/assets/home/ins.png" alt="instagram"  width={15} height={15} />
                </Link>
                <Link href={settings ? settings.youtube : ''}>
                  <Image src="/assets/home/x.png" alt="x"  width={15} height={15} />
                </Link>
              </div>
            </div>
            <div className='md:justify-start justify-center items-center gap-4 flex'>
              <div className='justify-start items-center gap-2 flex border-e'>
                <Select
                  onValueChange={handleChangeLanguage}
                  defaultValue='en'
                >
                  <SelectTrigger
                    className={cn('bg-blue border-none focus:ring-offset-0 focus:ring-0')}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='en'>English</SelectItem>
                      <SelectItem value='ar'>Arabic</SelectItem>
                      <SelectItem value='fr'>French</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='justify-start items-center gap-2 flex'>
                <Select
                  onValueChange={handleChangeCurrency}
                  defaultValue='USD'
                >
                  <SelectTrigger
                    className={cn('bg-blue border-none focus:ring-offset-0 focus:ring-0')}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='USD'>$-USD</SelectItem>
                      <SelectItem value='EGY'>$-Egy</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

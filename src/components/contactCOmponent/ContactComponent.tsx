'use client';

import HeroBackground from '@/components/helper/HeroBackground';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { TfiLocationPin } from 'react-icons/tfi';
import { GoogleMapComponent } from '@/components/helper/googleMap/GoogleMapComponent';
import { FaArrowRight } from 'react-icons/fa6';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';
import toast from 'react-hot-toast';

const ContactComponent = () => {
  const [inputsData, setInputsData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputsData({ ...inputsData, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/api/public/contact_us`, inputsData)
      .then(() => {
        toast.success('Message sent successfully');
        setInputsData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      })
      .catch((error) => {
        const errorMessage = error.response.data.data
        console.log(errorMessage);
        for (const error in errorMessage) {
          toast.error(`${error}: ${errorMessage[error]}`, {id: 'error'});
        }
      });
  };

  return (
    <main className='mb-20'>
      <HeroBackground title='Contact' />
      <section className='container'>
        <div className='my-4 grid grid-cols-3 gap-4 items-center '>
          <div className='md:col-span-1 col-span-3 space-y-4 rounded-lg  text-card-foreground shadow-sm  '>
            <Card className='flex items-center bg-[#F5F5F5] p-4 '>
              <FiPhoneCall
                color='white'
                className=' text-5xl p-3 m-0 rounded-full bg-[#22B9DD]'
              />

              <CardContent className=' p-3'>
                <h3 className='text-[16px] font-bold'>Phone</h3>
                <div className='flex flex-col  text-[#5C5C5C] text-sm'>
                  <span>+1 (123) 456-7890</span>
                  <span>+1 (123) 456-7890</span>
                </div>
              </CardContent>
            </Card>
            <Card className='flex items-center bg-[#F5F5F5] p-4 '>
              <HiOutlineMail
                color='white'
                className=' text-5xl p-3 m-0 rounded-full bg-[#22B9DD]'
              />
              <CardContent className=' p-3'>
                <h3 className='text-lg font-bold'>E-mail Address</h3>
                <div className='flex flex-col space-y-1'>
                  <div className='flex items-center text-sm text-[#5C5C5C] space-x-2'>
                    <Link
                      href='#'
                      prefetch={false}
                    >
                      alma.lawson@example.com
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className='flex items-center bg-[#F5F5F5] p-4 '>
              <TfiLocationPin
                color='white'
                className=' text-5xl p-3 m-0 rounded-full bg-[#22B9DD]'
              />
              <CardContent className=' p-3'>
                <h3 className='text-lg font-bold'>Address</h3>
                <div className='flex flex-col space-y-1'>
                  <div className='flex items-center text-sm text-[#5C5C5C] space-x-2'>
                    <span>1234 Street Name, City, State, 56789</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className='bg-[#F5F5F5] md:col-span-2 col-span-3'>
            <CardHeader>
              <h2 className='text-2xl font-bold'>Send us a Message</h2>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='md:flex items-center md:space-x-2 md:space-y-0 space-y-2'>
                <Input
                  name='name'
                  placeholder='Name*'
                  type='text'
                  value={inputsData.name}
                  onChange={handleInputChange}
                />
                <Input
                  name='email'
                  placeholder='E-mail*'
                  type='email'
                  value={inputsData.email}
                  onChange={handleInputChange}
                />
              </div>
              <Input
                name='subject'
                placeholder='Subject *'
                type='text'
                value={inputsData.subject}
                onChange={handleInputChange}
              />

              <Textarea
                name='message'
                placeholder='Enter your message'
                className='min-h-[100px]'
                value={inputsData.message}
                onChange={handleInputChange}
              />
            </CardContent>
            <CardFooter>
              <Button
                className='bg-[#22B9DD] gap-1 text-black font-bold border border-black shadow-md shadow-black rounded-full hover:bg-[#22b8dd86] '
                onClick={handleSubmit}
              >
                Submit Now <FaArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <GoogleMapComponent />
      </section>
    </main>
  );
};

export default ContactComponent;

import Image from 'next/image';
import React from 'react';
import cartempaty from '@/../public/assets/cartempaty.svg';
import { Card, CardContent } from '@/components/ui/card';
import Ellipse from '@../../../public/assets/Ellipse 8328.svg';
import { SearchInput } from '@/components/header/searchInput';
import { Button } from '@/components/ui/button';
import { GoPlus } from 'react-icons/go';
import Link from 'next/link';
import { coursesCart } from '../../shoppingCart';
import { getLocale } from 'next-intl/server';
import { BsArrowRightShort, BsCollectionPlay } from 'react-icons/bs';
import { FiDelete, FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import { PiStudent } from 'react-icons/pi';
import { TbClockHour3 } from 'react-icons/tb';

export const metadata = {
  title: ' Courses | Instructor',
  description: 'Courses Page',
};
export default async function Courses() {
  const locale = await getLocale();
  return (
    <div className='mb-20'>
      <div className=' w-full flex items-center justify-between  py-2 mb-2 font-sans'>
        <h2 className='text-4xl text-[#333333] font-semibold'>Courses</h2>
        <Link
          href={`/${locale}/instructor/courses/add-new-course` || '/'}
          className='bg-[#22B9DD] flex items-center hover:bg-[#22b8dd8a] text-white text-xl rounded-[20px] px-[32px] py-[18px] '
        >
          <GoPlus />
          Add New Course
        </Link>
      </div>
      <SearchInput />
      <div className='w-full mt-4  flex flex-col space-y-8  '>
        {coursesCart.length > 0 ? (
          coursesCart.map((cart) => (
            <Card
              key={cart.id}
              className='  rounded-lg border border-[#EBEBEB] px-2 py-6   hover:bg-[#22B9DD] hover:text-white'
            >
              <CardContent className='md:flex items-center gap-4  '>
                <Image
                  src={cart.imageUrl}
                  width={100}
                  height={100}
                  alt={cart.name}
                  className=' w-96  '
                />
                <div className='w-full flex flex-col space-y-6  mb-4'>
                  <div className='flex justify-between items-center '>
                    <div className='font-normal border rounded-3xl px-10 py-1 bg-[#22B9DD]  text-xl  text-wrap '>
                      {cart.category}
                    </div>
                    <div className='flex items-center gap-3'>
                      <Link
                        href={`/${locale}/instructor/courses/${cart.id}` || '/'}
                        className='   hover:bg-blue-700 rounded-full shadow-sm p-1 transition-all'
                      >
                        <RiEdit2Line size={22} />
                      </Link>
                      <Link
                        href={`/${locale}/instructor/courses/${cart.id}` || '/'}
                        className='  hover:bg-red-700 rounded-full shadow-sm p-1 transition-all'
                      >
                        <RiDeleteBin6Line size={22} />
                      </Link>
                    </div>
                  </div>
                  <div className='flex w-full justify-between items-center border-b pb-2  '>
                    <div className=''>
                      <div className='font-medium text-2xl  text-wrap '>{cart.title}</div>
                      <p className='text-[#767676] flex items-center gap-2  text-base'>
                        <Image
                          src={Ellipse}
                          alt='yellow circle'
                          width={40}
                          height={40}
                          className='rounded-full'
                        />
                        By <span className='font-bold'> {cart.name}</span>
                      </p>
                    </div>
                    <div className='flex text-yellow-500'>
                      <svg
                        className='w-5 h-5 '
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z' />
                      </svg>
                      <svg
                        className='w-5 h-5 '
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z' />
                      </svg>
                      <svg
                        className='w-5 h-5 '
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z' />
                      </svg>
                      <svg
                        className='w-5 h-5 '
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z' />
                      </svg>
                      <p className=' text-base'>{cart.rating}</p>{' '}
                    </div>
                  </div>
                  <div className='flex items-center gap-10 font-normal text-sm '>
                    <div className='flex items-center gap-1'>
                      <BsCollectionPlay />
                      <p>{cart.leasons} Lessons</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <TbClockHour3 />
                      <p>{cart.houre} Hours</p>
                    </div>

                    <div className='flex items-center gap-1'>
                      <PiStudent />
                      <p>{cart.students} Students</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className='mx-[2%] mt-10 relative'>
            <div className='flex flex-col items-center justify-center bg-white shadow-lg  my-10  max-w-sm mx-auto'>
              <div className='my-4'>
                {/* Icon or Image */}
                <Image
                  src={cartempaty} // Replace with the actual path to your image/icon
                  alt='Cart is empty'
                  width={100}
                  height={100}
                  className='object-cover w-64'
                />
              </div>
              <div className='text-center text-white bg-[#22B9DD] w-full py-4 rounded-b-2xl '>
                <h2 className='text-lg md:text-3xl font-bold '>Cart is empty!</h2>
                <p className='text-lg md:text-lg  mt-2'>Please add some courses in your cart.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import HeroBackground from '@/components/helper/HeroBackground';
import React from 'react';
import Image from 'next/image';
import cartempaty from '@/../public/assets/cartempaty.svg';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { Card, CardContent } from '@/components/ui/card';
import { shopping } from '.';
import ShoppingCartOrderSummary from '@/components/shoppingCart/ShoppingCartOrderSumary';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Stars from '@/components/stars/Stars';
import { LuFileCheck } from 'react-icons/lu';
import { RiDeleteBinLine } from 'react-icons/ri';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart Page',
};

export default async function ShoppingCart() {
  const locale = await getLocale();

  return (
    <main className='mb-20'>
      <HeroBackground title='Shopping Cart' />
      <div className='container w-full grid lg:grid-cols-4 gap-6 items-start'>
        {shopping.length > 0 ? (
          <>
            <div className='lg:col-span-3'>
              <h1 className='my-4'>{shopping?.length} courses in cart</h1>
              {shopping.map((cart: any) => (
                <Link
                  key={cart?.id}
                  href={`/${locale}/top-courses/${cart?.id}`}
                  className='bg-white rounded-2xl border-1 border-[#E2E8F0] '
                >
                  <Card className='p-0 rounded-xl mb-2'>
                    <CardContent className='flex flex-col lg:flex-row p-4'>
                      <Image
                        src={cart?.imageUrl}
                        width={100}
                        height={100}
                        alt={cart?.instructorName}
                        className='w-64 h-100'
                      />
                      <div className='w-full flex flex-col justify-between gap-3 px-4 mb-4 '>
                        <div className='flex justify-between items-end '>
                          <div className='mt-4 lg:mt-0'>
                            <div className='font-bold text-xl max-w-[18rem] text-wrap'>
                              {cart?.title}
                            </div>
                            <p className='text-gray-700 text-base'>By {cart?.instructorName}</p>
                          </div>
                          <div className='pt-4 pb-2'>
                            <p className='text-base md:text-2xl font-bold text-[#0F1A29]'>
                              {cart.students}C
                            </p>
                          </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2'>
                          <div className='flex items-end gap-1'>
                            <p className='text-[#FEC84B]'>{cart?.rating}</p>
                            <Stars rating={cart?.rating} />
                          </div>
                          <p>({cart?.reviewersCount} rating)</p>
                          <p className=''>{cart?.duration} Total Hours</p>
                          <p>{cart?.LecturesCount} Lessons</p>
                          <p>{cart?.level}</p>
                        </div>
                        <div className='flex items-center gap-2 mt-2 lg:mt-0'>
                          <div className='flex items-center gap-2'>
                            <button className='p-1 rounded-full bg-[#22B9DD]'>
                              <LuFileCheck color='#FFFFFF' />
                            </button>
                            <span className='text-[#22B9DD]'>Save for later</span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <button className='p-1 rounded-full bg-[#DC2626]'>
                              <RiDeleteBinLine color='#FFFFFF' />
                            </button>
                            <span className='text-[#DC2626]'>Remove</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className='shadow-shadow_hover rounded-2xl border-1 border-[#E2E8F0] lg:col-span-1'>
              <h1 className='text-lg font-bold py-4'>Order Details</h1>
              <div className='flex flex-col gap-6'>
                <ShoppingCartOrderSummary
                  label='Price'
                  value='300 C'
                />
                <ShoppingCartOrderSummary
                  label='Discount'
                  value='-10 C'
                />
                <ShoppingCartOrderSummary
                  label='Tax'
                  value='-25 C'
                />
                <hr />
                <ShoppingCartOrderSummary
                  label='Total'
                  value='275 C'
                />
              </div>
              <div className='w-full flex justify-center items-center my-6'>
                <button className='bg-[#22B9DD] rounded-full text-[#FFFFFF] px-10 py-3 font-semibold text-sm inline-flex items-center gap-1'>
                  Proceed to Checkout
                  <IoIosArrowRoundForward
                    size={20}
                    color='#FFFFFF'
                    className='font-bold'
                  />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className='lg:col-span-4 mt-10 relative'>
            <div className='flex flex-col items-center justify-center bg-white shadow-lg  my-10 max-w-sm mx-auto '>
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
                <h2 className='text-lg lg:text-3xl font-bold '>Cart is empty!</h2>
                <p className='text-lg lg:text-lg mt-2'>Please add some courses in your cart.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

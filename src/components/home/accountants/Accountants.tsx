'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import accountant from '@../../../public/assets/accountant/accountant.jpg';
import { SearchInput } from '@/components/header/searchInput';
import FilteringSelectMenu from '@/components/filteringSelectMenu/FilteringSelectMenu';
import { SelectChangeEvent } from '@mui/material';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import HeroBackground from '@/components/helper/HeroBackground';
import PaginationComponent from '@/components/pagination/PaginationComponent';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lip/redux/store';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function Accountants() {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [value, setValue] = React.useState('option1');

  const instructors = [
    {
      id: 1,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'Software Engineer',
      rating: 4.5,
      students: 1200,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      position: 'top',
      flag: true,
    },
    {
      id: 2,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'Product Manager',
      rating: 4.7,
      students: 1500,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      flag: false,
    },
    {
      id: 3,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'IT Specialist',
      rating: 4.6,
      students: 1100,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      flag: false,
    },
    {
      id: 4,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'Business Analyst',
      rating: 4.8,
      students: 1300,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      flag: false,
    },
    {
      id: 5,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'Accountant',
      rating: 4.9,
      students: 1400,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      flag: true,
    },
    {
      id: 6,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'Accountant',
      rating: 4.9,
      students: 1400,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      flag: true,
    },
    {
      id: 7,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'Accountant',
      rating: 4.9,
      students: 1400,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      flag: true,
    },
    {
      id: 8,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'Accountant',
      rating: 4.9,
      students: 1400,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      flag: true,
    },
    {
      id: 9,
      jobId: '#281093120',
      name: 'Lorem ipsum dolor sit amet.',
      title: 'Accountant',
      rating: 4.9,
      students: 1400,
      imageUrl: accountant,
      category: 'Open to Work',
      jopType: 'Full Time',
      address: 'Dubai, UAE',
      expectSalary: 'AED 10,000',
      flag: true,
    },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // dispatch(getAccountants({ page: currentPage, search }));
  };

  useEffect(() => {
    // dispatch(getAccountants({ page: currentPage, search }));
  }, [dispatch, currentPage, search]);

  const handleValueChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <>
      {/* <HeroBackground title='accountant' /> */}
      <div className='grid lg:grid-cols-2 grid-cols-1 px-10 max-w-screen  pt-14'>
        <div className='col-span-1 lg:col-span-3 relative w-full h-full'>
          <div className='flex items-center justify-between space-x-2 pl-4 mb-4'>
            <div className='flex flex-col justify-center space-x-2  '>
              <h2 className='text-xl font-bold ml-2'>Accountants</h2>
              <span className=' text-sm'>
                Total <span>120</span> accountant found
              </span>
            </div>
            <div className=" flex gap-2 m-auto justify-center items-center text-center">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="fullname"
                  >
                  Sort By:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md ps-3 ">
                    <Select defaultValue="Ae">
                      <SelectTrigger
                        className={cn(
                          "bg-blue border-none focus:ring-offset-0 focus:ring-0    "
                        )}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Ae">United Arab Emirates</SelectItem>
                          <SelectItem value="Sa">Saudi Arabia</SelectItem>
                          <SelectItem value="Qa">Qatar</SelectItem>
                          <SelectItem value="Om">Oman</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
            <div className='col-span-1 '>
          <SearchInput />
        </div>
          </div>

          <div className='grid lg:grid-cols-3 gap-3'>
            {instructors.map((instructor) => (
              <div key={instructor.id}>
                <Card className='bg-white'>
                  <CardContent className='p-2'>
                    <Image
                      src={instructor.imageUrl}
                      width={100}
                      height={100}
                      alt={instructor.name}
                      className='w-full h-auto rounded-lg'
                    />
                    <div className='flex justify-between py-2  items-center'>
                      <div className='flex items-center'>
                        <span className='ml-2 font-semibold'>{instructor.jobId}</span>
                      </div>
                      <p className=' flex items-center text-sm text-gray-600 px-4 py-1 rounded-lg bg-[#E9F8FC]'>
                        <span className='text-[#22B9DD]'>{instructor.jopType}</span>
                      </p>
                    </div>
                    <div className='flex justify-between py-2  items-center'>
                      <div className='flex flex-col items-start'>
                        <p className='text-sm text-gray-600 '>
                          <span className='text-xl'>$</span> Expected Salary
                          <span className='ps-1 font-semibold'>{instructor.expectSalary}</span>
                        </p>{' '}
                        <p className=' flex items-center text-sm text-gray-600 gap-1'>
                          <SlLocationPin />
                          {instructor.address}
                        </p>
                      </div>
                    </div>
                    <div className='flex justify-between py-2  items-center'>
                      <span className='ml-2 font-semibold'>{instructor.jobId}</span>
                      <div className='flex items-center'>
                        <svg
                          className='w-5 h-5 text-yellow-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z' />
                        </svg>
                        <span className='ml-2 font-semibold'>{instructor.rating}</span>
                      </div>
                    </div>
                    <hr />
                  
                    <div className='flex justify-center p-2'>
                      <Link href={`/en/accountant/accountants/${instructor.id}`}>
                      <button className='w-full py-3 bg-[#22B9DD] text-white rounded-full flex items-center justify-center gap-2 p-4'>
                        View More Info
                        <MdOutlineArrowRightAlt size={20} />
                      </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className='w-screen flex justify-center items-center mt-16 mb-12'>
          <PaginationComponent
            // totalPages={blogs?.meta?.last_page}
            totalPages={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

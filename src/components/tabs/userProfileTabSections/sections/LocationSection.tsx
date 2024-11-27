'use client';
import { IoAdd } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import InputAndLabel from '@/components/InputAndLabel/inputAndLabel';
import { useState } from 'react';

const LocationSection = () => {
  const [isAddLocationArea, setIsAddLocationArea] = useState(false);
  return (
    <div className='lg:ps-6'>
      {isAddLocationArea ? (
        <>
          <h1 className='text-3xl font-semibold my-6'>Add New Location</h1>
          <div className='w-full flex flex-col gap-6'>
            <InputAndLabel
              label='Country'
              placeholder='Enter Country Name'
            />
            <InputAndLabel
              label='City'
              placeholder='Enter your City Name'
            />
            <InputAndLabel
              label='Full Address'
              placeholder='Enter your Full Address'
            />
          </div>
          <div className='mt-4 flex items-center gap-4 lg:ps-2'>
            <button
              className='flex items-center gap-2 py-4 px-12 rounded-full bg-white text-[#22B9DD] border border-[#22B9DD]'
              onClick={() => setIsAddLocationArea(false)}
            >
              <BsArrowLeft
                size={20}
                color='#22B9DD'
              />
              Back
            </button>
            <button
              className='flex items-center gap-2 py-4 px-12 rounded-full bg-[#22B9DD] text-white'
              // onClick={handleProfileLocationUpdate}
            >
              <IoAdd
                size={20}
                color='#FFFFFF'
              />
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='my-8 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between'>
            <h1 className='text-3xl font-semibold'>Location</h1>
            <button
              className='flex mt-4 lg:mt-0 items-center gap-2 px-8 py-4 bg-[#22B9DD] text-[#FFFFFF] rounded-xl'
              onClick={() => setIsAddLocationArea(true)}
            >
              <IoAdd
                size={20}
                color='#FFFFFF'
              />
              Add New Location
            </button>
          </div>
          <table className='w-full'>
            <tr className='bg-[#E9F8FC] text-center'>
              <td className='p-2'>NO.</td>
              <td>Country</td>
              <td>City</td>
              <td>Full Address</td>
              <td>Action</td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
};

export default LocationSection;

'use client';

import InputAndLabel from '@/components/InputAndLabel/inputAndLabel';
import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';

const SocialSection = () => {
  const [isUpdateSocialArea, setIsUpdateSocialArea] = useState(false);
  return (
    <div className='lg:ps-6'>
      <div className='my-6 flex flex-col lg:flex-row items-start lg:items-center justify-between'>
        <h1 className='text-3xl font-semibold'>
          {isUpdateSocialArea ? 'Edit Social Media' : 'Social Media'}
        </h1>
        {!isUpdateSocialArea && (
          <button
            className='mt-4 lg:mt-0 flex items-center gap-2 px-8 py-4 bg-[#22B9DD] text-[#FFFFFF] rounded-xl'
            onClick={() => setIsUpdateSocialArea(true)}
          >
            <IoAdd
              size={20}
              color='#FFFFFF'
            />
            Add Social Media Link
          </button>
        )}
      </div>
      <div className='flex flex-col justify-start gap-4 w-full'>
        <InputAndLabel label='Facebook' />
        <InputAndLabel label='Twitter' />
        <InputAndLabel label='Linkedin' />
        <InputAndLabel label='Github' />
        <InputAndLabel label='Instagram' />
      </div>
      {isUpdateSocialArea ? (
        <>
          <div className='mt-4 flex items-center gap-4 lg:ps-2'>
            <button
              className='flex items-center gap-2 py-4 px-12 rounded-full bg-white text-[#22B9DD] border border-[#22B9DD]'
              onClick={() => setIsUpdateSocialArea(false)}
            >
              <BsArrowLeft
                size={20}
                color='#22B9DD'
              />
              Back
            </button>
            <button
              className='flex items-center gap-2 py-4 px-12 rounded-full bg-[#22B9DD] text-white'
              // onClick={handleProfileSocialUpdate}
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
          <button
            className='flex items-center gap-2 py-4 px-10 rounded-full bg-[#22B9DD] text-white'
            // onClick={handleProfileSocialUpdate}
          >
            <MdOutlineEdit
              size={20}
              color='#FFFFFF'
            />
            Update
          </button>{' '}
        </>
      )}
    </div>
  );
};

export default SocialSection;

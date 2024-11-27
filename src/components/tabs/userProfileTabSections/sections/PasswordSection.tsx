'use client';

import InputAndLabel from '@/components/InputAndLabel/inputAndLabel';
import { IoAdd } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import { useState } from 'react';
import { modifyData } from '@/lib/api/modifyData';
import toast from 'react-hot-toast';

const PasswordSection = () => {
  const [inputsData, setInputsData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChangePassword = async () => {
    const response = await modifyData({
      endPoint: '/auth/password/change_password',
      method: 'PUT',
      data: {
        old_password: inputsData.currentPassword,
        new_password: inputsData.newPassword,
        new_password_confirmation: inputsData.confirmPassword,
      },
    });
    if (response && response.type === 'success') {
      toast.success(response.message);
    } else if (response.data) {
      for (const key in response.data) {
        toast.error(`${key}: ${response.data[key]}`);
      }
    } else if (response.message) {
      toast.error(response.message);
    }
  };

  return (
    <div className='lg:ps-6'>
      <h1 className='text-3xl font-semibold my-6'>Change Password</h1>
      <div className='w-full flex flex-col gap-6'>
        <InputAndLabel
          label='Current Password'
          placeholder='Enter Current Password'
          value={inputsData.currentPassword}
          onChange={(e) => setInputsData({ ...inputsData, currentPassword: e.target.value })}
        />
        <InputAndLabel
          label='New Password'
          placeholder='Enter New Password'
          value={inputsData.newPassword}
          onChange={(e) => setInputsData({ ...inputsData, newPassword: e.target.value })}
        />
        <InputAndLabel
          label='Confirm Password'
          placeholder='Confirm Password'
          value={inputsData.confirmPassword}
          onChange={(e) => setInputsData({ ...inputsData, confirmPassword: e.target.value })}
        />
      </div>
      <div className='mt-4 flex items-center gap-4 lg:ps-2'>
        <button className='flex items-center gap-2 py-4 px-12 rounded-full bg-white text-[#22B9DD] border border-[#22B9DD]'>
          <BsArrowLeft
            size={20}
            color='#22B9DD'
          />
          Back
        </button>
        <button
          className='flex items-center gap-2 py-4 px-12 rounded-full bg-[#22B9DD] text-white'
          onClick={handleChangePassword}
        >
          <IoAdd
            size={20}
            color='#FFFFFF'
          />
          Save
        </button>
      </div>
    </div>
  );
};

export default PasswordSection;

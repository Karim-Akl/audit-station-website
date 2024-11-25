'use client';

import Image from 'next/image';
import { CiCamera } from 'react-icons/ci';
import NameAndInput from './nameAndInput/NameAndInput';
import SelectMenu from './selectMenu/SelectMenu';
import { IoAdd } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import PhoneInputComponent from '../phoneInput/PhoneInput';
import { modifyData } from '@/lib/api/modifyData';
import toast from 'react-hot-toast';
import { BASE_URL } from '@/lib/actions/actions';
import axios from 'axios';

interface ProfileDataTypes {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  avatar: File | undefined;
}

const UserProfileTabSections = ({ profileData, token }: any) => {
  const [inputsData, setInputsData] = useState<ProfileDataTypes>({
    name: '',
    email: '',
    phone: '',
    avatar: undefined,
  });

  useEffect(() => {
    if (profileData) {
      setImage(profileData.avatar);
      setInputsData(profileData);
    }
  }, [profileData]);

  const [image, setImage] = useState('');

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setInputsData({ ...inputsData, avatar: file });
    }
  };

  const handleProfileDataUpdate = async () => {
    const formData = new FormData();
    if (inputsData.name) {
      formData.append('name', inputsData.name);
    }
    if (inputsData.email) {
      formData.append('email', inputsData.email);
    }
    if (inputsData.phone) {
      formData.append('phone', inputsData.phone);
    }
    if (inputsData.avatar) {
      formData.append('avatar', inputsData.avatar);
    }

    console.log('formData: ', formData);
    return;

    const response = await axios
      .post(`${BASE_URL}/auth/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response: ', response);
        toast.success('updated successfully');
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  return (
    <div className='flex flex-col'>
      <div className='w-24 h-24 relative my-10'>
        <Image
          src={image || ''}
          alt='Profile Image'
          fill
          objectFit='cover'
          className='rounded-full'
        />
        <label
          htmlFor='avatar-upload'
          className='p-2 rounded-full bg-white absolute bottom-0 right-0 cursor-pointer'
        >
          <CiCamera
            color='#1FA8C9'
            size={20}
          />
        </label>
        <input
          type='file'
          id='avatar-upload'
          // accept='image/*'
          className='hidden'
          onChange={handleImageChange}
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <NameAndInput
          label='Full Name'
          value={inputsData?.name}
          onChange={(e: any) => setInputsData({ ...inputsData, name: e.target.value })}
        />

        <NameAndInput
          label='Email'
          value={inputsData?.email}
          onChange={(e: any) => setInputsData({ ...inputsData, email: e.target.value })}
        />
        <PhoneInputComponent label='Phone Number' />
      </div>
      <div className='my-6 grid grid-cols-2'>
        <div className='col-span-1'>
          <SelectMenu
            label='Gender'
            value='male'
            options={['Male', 'Female']}
          />
        </div>
        <div className='col-span-1'>
          <SelectMenu
            label='Age'
            value={32}
            options={[32, 34]}
          />
        </div>
        <div className='mt-4 flex items-center gap-4 ps-2'>
          <button className='flex items-center gap-2 py-4 px-12 rounded-full bg-white text-[#22B9DD] border border-[#22B9DD]'>
            <BsArrowLeft
              size={20}
              color='#22B9DD'
            />
            Back
          </button>
          <button
            className='flex items-center gap-2 py-4 px-12 rounded-full bg-[#22B9DD] text-white'
            onClick={handleProfileDataUpdate}
          >
            <IoAdd
              size={20}
              color='#FFFFFF'
            />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileTabSections;

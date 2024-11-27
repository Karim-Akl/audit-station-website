'use client';

import Image from 'next/image';
import { CiCamera } from 'react-icons/ci';
import SelectMenu from '../selectMenu/SelectMenu';
import { IoAdd } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import PhoneInputComponent from '../../phoneInput/PhoneInput';
import InputAndLabel from '@/components/InputAndLabel/inputAndLabel';
import { parsePhoneNumberFromString, PhoneNumber } from 'libphonenumber-js';
import { modifyData } from '@/lib/api/modifyData';
import toast from 'react-hot-toast';

interface ProfileDataTypes {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  avatar: File | undefined;
}

const UserProfileSection = ({ profileData }: any) => {
  const [inputsData, setInputsData] = useState<ProfileDataTypes>({
    name: '',
    email: '',
    phone: '',
    avatar: undefined,
  });

  const [image, setImage] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setInputsData({
        name: profileData.name || '',
        email: profileData.email || '',
        phone: profileData.phone || '',
        avatar: undefined,
      });

      if (profileData && profileData.avatar) {
        setImage(profileData.avatar);
        try {
          const avatarFile = await convertUrlToFile(profileData.avatar);
          setInputsData((prevState) => ({
            ...prevState,
            avatar: avatarFile,
          }));
        } catch (error) {
          console.log('Error converting URL to file', error);
        }
      }
    };
    if (profileData) {
      loadData();
    }
  }, [profileData]);

  const convertUrlToFile = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status}`);
      }
      const blob = await response.blob();
      const file = new File([blob], 'avatar.jpg', { type: blob.type });
      return file;
    } catch (error) {
      console.error('Error fetching image: ', error);
      throw error;
    }
  };

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

    try {
      const response = await modifyData({
        endPoint: '/auth/profile',
        data: formData,
      });
      console.log('response: ', response);
      if (response && response.code === 200) {
        toast.success('profile updated successfully');
      } else if (response.data)  {
        for (const key in response.data) {
          toast.error(`${key}: ${response.data[key]}`);
        }
      } else if (response.message) {
        toast.error(response.message);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleChangeNumber = (e: string) => {
    const phoneNumberObj: PhoneNumber | undefined = parsePhoneNumberFromString(e);
    setInputsData({ ...inputsData, phone: phoneNumberObj?.number || '' });
  };

  return (
    <div className='flex flex-col lg:ps-4'>
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
        <InputAndLabel
          label='Full Name'
          value={inputsData?.name}
          onChange={(e: any) => setInputsData({ ...inputsData, name: e.target.value })}
        />

        <InputAndLabel
          label='Email'
          value={inputsData?.email}
          onChange={(e: any) => setInputsData({ ...inputsData, email: e.target.value })}
        />
        <PhoneInputComponent
          label='Phone Number'
          value={inputsData?.phone}
          onChange={handleChangeNumber}
        />
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
        <div className='mt-4 flex items-center gap-4 lg:ps-2 max-w-screen'>
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

export default UserProfileSection;

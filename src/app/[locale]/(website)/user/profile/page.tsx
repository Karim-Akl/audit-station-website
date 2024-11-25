import UserProfileTabSections from '@/components/tabs/userProfileTabSections/UserProfileTabSections';
import Profile_component from '@/components/user/profile/profile_component';
import { fetchData } from '@/lib/api/fetchData';
import { getSession } from '@/lib/authSession';
import React from 'react';

export default async function page({ searchParams }: { searchParams: { [key: string]: number } }) {
  const cookiesSessionData = await getSession();
  const token = cookiesSessionData?.user?.data?.token;
  const profileData = await fetchData({ endPoint: '/auth/profile' });
  
  return (
    <div className='mb-20'>
      <Profile_component value={searchParams.value} />
      {Number(searchParams.value) === 1 && <UserProfileTabSections profileData= {profileData} token= {token} />}
    </div>
  );
}

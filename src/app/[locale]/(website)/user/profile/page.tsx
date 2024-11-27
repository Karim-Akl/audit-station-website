import LocationSection from '@/components/tabs/userProfileTabSections/sections/LocationSection';
import Profile_component from '@/components/user/profile/profile_component';
import { fetchData } from '@/lib/api/fetchData';
import { getSession } from '@/lib/authSession';
import React from 'react';
import SocialSection from '@/components/tabs/userProfileTabSections/sections/SocialSection';
import PaymentMethodsSection from '@/components/tabs/userProfileTabSections/sections/PaymentMethodsSection';
import PasswordSection from '@/components/tabs/userProfileTabSections/sections/PasswordSection';
import DeleteAccountSection from '@/components/tabs/userProfileTabSections/sections/DeleteAccountSection';
import UserProfileSection from '@/components/tabs/userProfileTabSections/sections/UserProfileSection';

export default async function page({ searchParams }: { searchParams: { [key: string]: number } }) {
  const cookiesSessionData = await getSession();
  const token = cookiesSessionData?.user?.data?.token;
  const profileData = await fetchData({ endPoint: '/auth/profile' });

  return (
    <div className='mb-20 max-w-screen'>
      <Profile_component value={searchParams.value} />
      {Number(searchParams.value) === 1 && (
        <UserProfileSection
          profileData={profileData}
          token={token}
        />
      )}
      {Number(searchParams.value) === 2 && <LocationSection />}
      {Number(searchParams.value) === 3 && <SocialSection />}
      {Number(searchParams.value) === 4 && <PaymentMethodsSection />}
      {Number(searchParams.value) === 5 && <PasswordSection />}
      {Number(searchParams.value) === 6 && <DeleteAccountSection />}
    </div>
  );
}

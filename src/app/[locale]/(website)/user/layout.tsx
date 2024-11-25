import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import SecondHeroBackground from '@/components/helper/SecondHeroBackground';
import type { Metadata } from 'next';
import { fetchData } from '@/lib/api/fetchData';

// Dynamic import for lazy loading
const LazyUserTabs = dynamic(() =>
  import('@/components/helper/Tabs').then((module) => module.UserTabs),
);

export const metadata: Metadata = {
  title: 'User',
  description: 'User Page',
};
export default async function SignInLayout({ children }: { children: React.ReactNode }) {
  const data = await fetchData({ endPoint: `/auth/profile` });
  return (
    <>
      <main className='mb-20 relative'>
        <SecondHeroBackground
          imageSrc={data?.avatar || '/'}
          title={data?.name || 'Loading'}
          email={data?.email || 'Loading'}
        />
        <section className='container my-4 grid grid-cols-4 gap-4'>
          <div className='md:col-span-1 col-span-4 space-y-4 rounded-lg'>
            <div className='shadow-box-shadow rounded-lg p-5'>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyUserTabs Name={data?.name || 'Loading'} />
              </Suspense>
            </div>
          </div>
          <div className='md:col-span-3 col-span-4 space-y-4 rounded-lg'>{children}</div>
        </section>
      </main>
    </>
  );
}

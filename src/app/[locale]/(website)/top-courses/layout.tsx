import { SearchInput } from '@/components/header/searchInput';
import HeroBackground from '@/components/helper/HeroBackground';
import React, { Suspense } from 'react';
import { BlogsTabs } from '@/components/helper/Tabs';
import { PopularPosts } from '@/components/helper/PopularPosts';

export const metadata = {
  title: 'Top Courses',
  description: 'Top Courses Page',
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='mb-20 relative'>
      <HeroBackground title='Top Courses' />
      <section className='container my-4 grid grid-cols-3 gap-4'>
        <div className='md:col-span-1 col-span-3 space-y-4 rounded-lg'>
          <Suspense fallback={<div>Loading Search Input...</div>}>
            <SearchInput />
          </Suspense>
          <div className='bg-[#F5F5F5] rounded-lg p-7'>
            <Suspense fallback={<div>Loading Blogs Tabs...</div>}>
              <BlogsTabs />
            </Suspense>
          </div>
          <div className='bg-[#F5F5F5] rounded-lg p-7'></div>
          <Suspense fallback={<div>Loading Popular Posts...</div>}>
            <PopularPosts />
          </Suspense>
        </div>

        <div className='md:col-span-2 col-span-3 space-y-4 rounded-lg'>
          <Suspense fallback={<div>Loading Content...</div>}>{children}</Suspense>
        </div>
      </section>
    </main>
  );
}

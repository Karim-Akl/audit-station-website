import { SearchInput } from '@/components/header/searchInput';
import HeroBackground from '@/components/helper/HeroBackground';
import React from 'react';
import { PopularPosts } from '@/components/helper/PopularPosts';

export const metadata = {
  title: 'Blogs',
  description: 'Blogs Page',
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='mb-20 relative'>
      <HeroBackground title='Blogs' />
      <section className='container my-4 grid grid-cols-3 gap-4  '>
        <div className='md:col-span-1 col-span-3 space-y-4 rounded-lg  '>
          <SearchInput />
          <div className='bg-[#F5F5F5] rounded-lg p-7'>
            <PopularPosts />
          </div>
        </div>

        <div className='md:col-span-2 col-span-3 space-y-4 rounded-lg'>{children}</div>
      </section>
    </main>
  );
}

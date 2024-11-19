import BlogsComponent from '@/components/blogs/BlogsComponent';
import React from 'react';

export const metadata = {
  title: 'Blogs',
  description: 'Blogs Page',
};
export default async function Blogs() {

  return (
    <>
      <BlogsComponent />
    </>
  );
}

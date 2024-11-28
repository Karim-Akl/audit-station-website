import BlogsComponent from '@/components/blogs/BlogsComponent';
import React from 'react';

export const metadata = {
  title: 'All Blogs',
  description: 'Blogs Page',
};
export default async function AllBlogs() {
  return (
    <>
      <BlogsComponent />
    </>
  );
}

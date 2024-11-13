import BlogsComponent from '@/components/blogs/BlogsComponent';
import React from 'react';

export const metadata = {
  title: 'Blogs',
  description: 'Blogs Page',
};
export default async function Blogs() {
  // const blogs = axios.get(`${BASE_URL}/api/public/blogs`);
  // const data = (await blogs)?.data?.data;
  // const meta = (await blogs)?.data?.meta;

  return (
    <>
      <BlogsComponent />
    </>
  );
}

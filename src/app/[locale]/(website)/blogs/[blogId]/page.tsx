import Image from 'next/image';
import { fetchData } from '@/lib/api/fetchData';
import BlogDetails from '@/components/blogs/blog/blogDetails/BlogDetails';
import BlogContent from '@/components/blogs/blog/blogContent/BlogContent';
import BlogAuthor from '@/components/blogs/blog/blogAuthor/BlogAuthor';
import BlogComments from '@/components/blogs/blog/blogComments/BlogComments';
import { getSession } from '@/lib/authSession';
import { cookies } from "next/headers";


interface BlogProps {
  params: {
    blogId: number;
  };
  // searchParams: {
  //   page: string;
  // };
}

export default async function Blog({
  params: { blogId },
}: // searchParams: { page = '1' },
BlogProps) {
  const sessionData = await getSession();
  const userId = sessionData?.user?.data?.id;
  const token = sessionData?.user?.data?.token;

  const commentsData = await fetchData({
    endPoint: `/api/public/comments?commentable_id=${blogId}`,
  });
  const data = await fetchData({ endPoint: `/api/public/blogs/${blogId}` });

  return (
    <div className='w-full h-full container'>
      <div className=''>
        <div className='w-full h-[500px] relative'>
          <Image
            loading='lazy'
            src={data?.author?.image}
            alt='blog'
            layout='fill'
            className='rounded-2xl'
          />
        </div>
      </div>
      <BlogDetails data={data} />
      <BlogContent data={data} />
      <BlogAuthor data={data?.author} />
      <BlogComments
        commentsData={commentsData}
        authorImage={data?.author?.image}
        blogId={blogId}
        userId={userId}
        token={token}
      />
    </div>
  );
}

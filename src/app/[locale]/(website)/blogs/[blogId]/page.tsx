import Image from 'next/image';

import { Textarea } from '@/components/ui/textarea';
import { fetchData } from '@/lib/api/fetchData';
import BlogComment from '@/components/blogs/blog/blogComments/blogComment/BlogComment';
import ServerSideComponentsPagination from '@/components/pagination/ServerSideComponentsPagination';
import BlogDetails from '@/components/blogs/blog/blogDetails/BlogDetails';
import BlogContent from '@/components/blogs/blog/blogContent/BlogContent';
import BlogAuthor from '@/components/blogs/blog/blogAuthor/BlogAuthor';
import BlogComments from '@/components/blogs/blog/blogComments/BlogComments';

interface BlogProps {
  params: {
    blogId: number;
  };
  // searchParams: {
  //   page: string;
  // };
}

export default async function instructorsDetailsPage({
  params: { blogId },
  // searchParams: { page = '1' },
}: BlogProps) {

  const commentsData = await fetchData({
    endPoint: `/api/public/comments?commentable_id=${blogId}`,
  });
  const data = await fetchData({ endPoint: `/api/public/blogs/${blogId}` });

  return (
    <div className='w-full h-full'>
      <div className=''>
        <div className='w-full h-[500px] relative'>
          <Image
            loading='lazy'
            src={data?.author?.image}
            alt='topCourse'
            layout='fill'
            className='rounded-2xl'
          />
        </div>
      </div>
      <BlogDetails data={data} />
      <BlogContent data={data} />
      <BlogAuthor data={data?.author} />
      <BlogComments commentsData={commentsData} authorImage={data?.author?.image} blogId={blogId} />
    </div>
  );
}

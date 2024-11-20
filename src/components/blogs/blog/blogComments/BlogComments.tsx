import BlogComment from './blogComment/BlogComment';
import BlogCreateCommentArea from './blogCreateCommentArea/BlogCreateCommentArea';

const BlogComments = async ({ commentsData, authorImage, blogId, token, userId }: any) => {
  return (
    <>
      <div>
        <h1 className='text-lg my-14'>Comments:</h1>
        {commentsData?.map((comment: any) => (
          <BlogComment
            key={comment.id}
            comment={comment}
            blogId={blogId}
            userId={userId}
            token={token}
          />
        ))}

        {/* Pagination */}

        <BlogCreateCommentArea
          authorImage={authorImage}
          blogId={blogId}
          token={token}
        />
      </div>
    </>
  );
};

export default BlogComments;

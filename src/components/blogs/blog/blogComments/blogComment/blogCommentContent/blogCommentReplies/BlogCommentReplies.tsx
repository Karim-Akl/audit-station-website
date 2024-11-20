// const BlogCommentContent = ({reply}: any) => {




//   return (
//     <>
//       <div className='flex flex-col gap-4 w-full'>
//         <div>
//           <div className='flex w-full justify-between items-center'>
//             <h1 className='text-lg'>{reply.name}</h1>
//             {userId === comment?.user?.id && (
//               <BlogCommentActions
//                 comment={comment}
//                 token={token}
//                 setIsReplyAreaOpen={setIsReplyAreaOpen}
//                 isReplyAreaOpen={isReplyAreaOpen}
//                 setReplyContent={setReplyContent}
//                 blogId={blogId}
//                 setIsUpdateContent={setIsUpdateContent}
//               />
//             )}
//           </div>
//           <p>{comment?.content}</p>
//         </div>
//         <div className='lg:flex gap-2 text-[#22B9DD] w-full'>
//           <span className='text-[#90949C] me-2 lg:me-0'>{formatDateTime(comment?.created_at)}</span>
//           <div
//             className='cursor-pointer'
//             onClick={handleGetCommentReplies}
//           >
//             <span className='me-1'>{comment?.replies_count}</span>
//             <span>Replies</span>
//           </div>
//           <BlogCommentReplyArea
//             isReplyAreaOpen={isReplyAreaOpen}
//             setIsReplyAreaOpen={setIsReplyAreaOpen}
//             replyContent={replyContent}
//             onReplyAreaContentChange={setReplyContent}
//             setReplyContent={setReplyContent}
//             token={token}
//             commentId={comment?.id}
//             blogId={blogId}
//             isUpdateContent={isUpdateContent}
//             setIsUpdateContent={setIsUpdateContent}
//           />
//         </div>
//         {isRepliesVisible &&
//           selectedComment === comment?.id &&
//           Array.isArray(commentReplies) &&
//           commentReplies.length > 0 &&
//           commentReplies?.map((reply) => {
//             return (
//               <div
//                 key={reply.id}
//                 className='flex gap-4'
//               >
//                 {/* <BlogCommentReplies /> */}
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// };

// export default BlogCommentContent;

import Image from 'next/image';

export const ReviewComment = ({ name, comment, image }: any) => {
  return (
    <div className='border-b border-gray-400 pb-4'>
      <div className='flex items-center gap-4'>
        <div className='w-16 h-16 relative'>
          <Image
            src={image}
            alt=''
            fill
            className='rounded-full'
          />
        </div>
        <h1 className='font-semibold'>{name}</h1>
      </div>
      <p className='my-4'>{comment}</p>
    </div>
  );
};

export default ReviewComment;

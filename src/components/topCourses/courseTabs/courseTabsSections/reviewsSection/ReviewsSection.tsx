import Rating from '@mui/material/Rating';
import ReviewLinearProgressBar from './reviewLinearProgressBar/ReviewLinearProgressBar';
import { ReviewComment } from './reviewComment/ReviewComment';
import reviewer from '../../../../../../public/assets/top-course/reviewer.png';

export const ReviewsSection = () => {
  const linearProgressStyles = {
    width: '100%',
    height: '8px',
    borderRadius: '2px',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#FDB022',
    },
    backgroundColor: '#EAEAEA',
  };

  const replies = [
    {
      id: 1,
      userName: 'Lina',
      comment:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet',
      image: reviewer,
    },
    {
      id: 2,
      userName: 'Lina',
      comment:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet',
      image: reviewer,
    },
    {
      id: 3,
      userName: 'Lina',
      comment:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet',
      image: reviewer,
    },
    {
      id: 4,
      userName: 'Lina',
      comment:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet',
      image: reviewer,
    },
  ];

  return (
    <>
      <div className='flex items-center gap-10'>
        <div className='bg-[#EAEAEA] py-6 px-10 flex flex-col items-center gap-3 rounded-lg'>
          <div className='text-[#767676] font-bold text-xl'>4 out of 5</div>
          <Rating
            defaultValue={5}
            precision={0.5}
          />
          <span className='text-[#A1A1A1]'>Top Raiting</span>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <ReviewLinearProgressBar rating={5} />
          <ReviewLinearProgressBar rating={4} />
          <ReviewLinearProgressBar rating={3} />
          <ReviewLinearProgressBar rating={2} />
          <ReviewLinearProgressBar rating={1} />
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-10'>
        {replies?.map((reply) => {
          return (
            <div key={reply.id}>
              <ReviewComment
                name={reply.userName}
                comment={reply.comment}
                image={reply.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReviewsSection;

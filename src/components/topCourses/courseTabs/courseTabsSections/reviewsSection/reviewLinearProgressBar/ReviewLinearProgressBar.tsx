import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';

const ReviewLinearProgressBar = ({rating}: any) => {
  const linearProgressStyles = {
    width: '100%',
    height: '8px',
    borderRadius: '2px',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#FDB022',
    },
    backgroundColor: '#EAEAEA',
  };

  return (
    <>
      <div className='flex items-center w-full gap-10'>
        <div className='flex items-center gap-1'>
          <span className='text-[#A1A1A1]'>{rating}</span>
          <span className='text-[#A1A1A1]'>Stars</span>
        </div>
        <LinearProgress
          variant='determinate'
          value={80}
          sx={linearProgressStyles}
        />
      </div>
    </>
  );
};

export default ReviewLinearProgressBar;

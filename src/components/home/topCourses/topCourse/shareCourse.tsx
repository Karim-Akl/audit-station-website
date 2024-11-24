import { FaFacebook, FaLinkedin, FaPinterest, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const ShareCourse = () => {
  return (
    <div className='p-4'>
      <span className='font-semibold'>Share this course:</span>
      <div className='flex items-center gap-2 mt-3'>
        <button className='bg-[#1877F2] p-2 rounded-sm'>
          <FaFacebook
            size={20}
            color='#FFFFFF'
          />
        </button>
        <button className='bg-[#0A66C2] p-2 rounded-sm'>
          <FaLinkedin
            size={20}
            color='#FFFFFF'
          />
        </button>
        <button className='bg-[#BD081C] p-2 rounded-sm'>
          <FaPinterest
            size={20}
            color='#FFFFFF'
          />
        </button>
        <button className='bg-[#26A5E4] p-2 rounded-sm'>
          <FaTelegramPlane
            size={20}
            color='#FFFFFF'
          />
        </button>
        <button className='bg-[#1D9BF0] p-2 rounded-sm'>
          <FaTwitter
            size={20}
            color='#FFFFFF'
          />
        </button>
      </div>
    </div>
  );
};

export default ShareCourse;

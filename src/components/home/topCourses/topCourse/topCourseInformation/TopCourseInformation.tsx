import { BsBarChart } from 'react-icons/bs';
import { IoTimeOutline } from 'react-icons/io5';
import { PiBookThin } from 'react-icons/pi';
import { PiPuzzlePieceThin } from 'react-icons/pi';
import { PiCertificateLight } from 'react-icons/pi';
import { SlGraduation } from 'react-icons/sl';

const TopCourseInformation = ({ label, data }: any) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <span>
          {label === 'Level' ? (
            <BsBarChart color='#767676' />
          ) : label === 'Duration' ? (
            <IoTimeOutline color='#767676' />
          ) : label === 'Lessons' ? (
            <PiBookThin color='#767676' />
          ) : label === 'Quizzes' ? (
            <PiPuzzlePieceThin color='#767676' />
          ) : label === 'Certifications' ? (
            <PiCertificateLight color='#767676' />
          ) : label === 'Language' ? (
            <SlGraduation color='#767676' />
          ) : (
            ''
          )}
        </span>{' '}
        <span>{label}</span>
      </div>
      <span
        className={`${
          label === 'Level' || label === 'Language'
            ? 'text-[#22B9DD] bg-[#E9F8FC] p-1 rounded-md'
            : ''
        }`}
      >
        {data}
      </span>
    </div>
  );
};

export default TopCourseInformation;

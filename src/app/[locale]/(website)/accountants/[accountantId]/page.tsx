import HeroBackground from '@/components/helper/HeroBackground';
import Image from 'next/image';
import accountant from '../../../../../../public/assets/accountant/accountant.jpg';
import { FaStar } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { PiCurrencyDollarSimple } from 'react-icons/pi';
import { IoMdTime } from 'react-icons/io';

interface BlogProps {
  params: {
    accountantId: number;
  };
}

const AccountantPage = async ({ params: { accountantId } }: BlogProps) => {
  return (
    <>
      <HeroBackground title='Accountant Profile' />
      <div className='mx-10 flex gap-6'>
        <div className='h-[311px] bg-[#22B9DD] w-full flex p-8 rounded-lg'>
          <div className='w-[250px] h-[250px] rounded-full relative'>
            <Image
              loading='lazy'
              src={accountant}
              alt='accountant'
              layout='fill'
              className='rounded-full'
            />
          </div>
          <div className='flex flex-col justify-start gap-4 ms-6 text-white max-w-[50%]'>
            <span>#281093120</span>
            <span>Accountant</span>
            <div className='w-full flex gap-12 '>
              <div className='flex items-center gap-1'>
                <FaStar
                  size={20}
                  color='#F8BC24'
                />
                <span>(5.0 Reviews)</span>
              </div>
              <div className='flex items-center gap-1'>
                <CiLocationOn size={20} />
                <span>United States</span>
              </div>
              <div className='flex items-center gap-1'>
                <PiCurrencyDollarSimple size={20} />
                <span>Expected Salary: $8000</span>
              </div>
              <div className='flex items-center gap-1'>
                <IoMdTime size={20} />
                <span>Full Time</span>
              </div>
            </div>
            <p>
              I am a web developer with a vast array of knowledge in many different front end and
              back end languages, responsive frameworks, databases, and best code practices
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountantPage;

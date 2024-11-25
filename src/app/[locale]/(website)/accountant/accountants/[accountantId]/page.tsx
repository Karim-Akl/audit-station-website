import HeroBackground from '@/components/helper/HeroBackground';
import Image from 'next/image';
// import accountant from '../../../public/assets/accountant/accountant.jpg';
import { FaStar } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { PiCurrencyDollarSimple } from 'react-icons/pi';
import { IoMdTime } from 'react-icons/io';
import ProfileSection from '@/components/profileSection/ProfileSection';
import Link from 'next/link';

const AccountantPage = async ({
  params: { accountantId },

}: {
  params: {
    accountantId: number;
  };
}) => {
  const experienceSteps = [
    {
      date: '06 Jun, 2023 - Present',
      description: 'Developer',
    },
    {
      date: '06 Jun, 2023 - Present',
      description: 'Developer',
    },
    {
      date: '06 Jun, 2023 - Present',
      description: 'Developer',
    },
  ];

  const educationSteps = [
    {
      date: '06 Jun, 2023 - Present',
      description: 'Complied Bachelor from Oxford University',
      degree: 'Bachelor',
    },
    {
      date: '06 Jun, 2023 - Present',
      description: 'Complied Bachelor from Oxford University',
      degree: 'Bachelor',
    },
    {
      date: '06 Jun, 2023 - Present',
      description: 'Complied Bachelor from Oxford University',
      degree: 'Bachelor',
    },
  ];

  const professionalCertificatesSteps = [
    {
      date: '06 Jun, 2023 - Present',
      description: 'Complied Bachelor from Oxford University',
      degree: 'Bachelor',
    },
    {
      date: '06 Jun, 2023 - Present',
      description: 'Complied Bachelor from Oxford University',
      degree: 'Bachelor',
    },
    {
      date: '06 Jun, 2023 - Present',
      description: 'Complied Bachelor from Oxford University',
      degree: 'Bachelor',
    },
  ];

  return (
    <>
      {/* <HeroBackground title='Accountant Profile' /> */}
      <div className='mx-10 border border-gray-200 rounded-lg p-4'>
        <div className='lg:h-[311px] bg-[#22B9DD] w-full flex flex-col md:flex-row py-3 md:p-8  rounded-lg overflow-y-auto'>
          <div className='w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] rounded-full relative mx-auto md:mx-0'>
            <Image
              loading='lazy'
              src="/assets/accountant/accountant.jpg"
              alt='accountant'
              layout='fill'
              className='rounded-full object-cover'
            />
          </div>
          <div className='flex flex-col justify-start gap-4 ms-6 text-white md:max-w-[55%] mt-4'>
            <span>#281093120</span>
            <span>Accountant</span>
            <div className='w-full flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-12'>
              <div className='flex items-center gap-1'>
                <FaStar
                  size={20}
                  color='#F8BC24'
                />
                <span className='whitespace-nowrap md:text-xs lg:text-base'>(5.0 Reviews)</span>
              </div>
              <div className='flex items-center gap-1'>
                <CiLocationOn size={20} />
                <span className='whitespace-nowrap md:text-xs lg:text-base '>United States</span>
              </div>
              <div className='flex flex-col justify-center  mt-4'>
                <div className='flex items-center gap-1'>
                  <PiCurrencyDollarSimple size={20} />
                  <span className='whitespace-nowrap md:text-xs lg:text-base'>
                    Expected Salary: $8000
                  </span>
                </div>
                <div className='flex items-center gap-1 mt-2 text-start'>
                  <IoMdTime size={20} />
                  <span className='whitespace-nowrap md:text-xs lg:text-base'>Full Time</span>
                </div>
              </div>

            </div>
            <p className=''>
              I am a web developer with a vast array of knowledge in many different front end and
              back end languages, responsive frameworks, databases, and best code practices
            </p>
          </div>
        </div>
        <div className='mt-12 shadow shadow-[#00000014] py-4 px-8 rounded-md'>
          <h1 className='text-lg font-bold'>Biography</h1>
          <p className='text-[#5C5C5C] mt-4'>
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa
            aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec
            massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis
            donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
            elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili
            adipiscing elit. Felis donec massa aliqua.
          </p>
        </div>
        <div className='mt-12 shadow shadow-[#00000014] py-4 px-8 rounded-md'>
          <ProfileSection
            steps={experienceSteps}
            label='Experience'
          />
        </div>
        <div className='mt-12 shadow shadow-[#00000014] py-4 px-8 rounded-md'>
          <ProfileSection
            steps={educationSteps}
            label='Education'
          />
        </div>
        <div className='mt-12 shadow shadow-[#00000014] py-4 px-8 rounded-md'>
          <ProfileSection
            steps={professionalCertificatesSteps}
            label='Professional Certifications'
          />
        </div>
          <Link href="/en/accountant/send-offer">
        <button className='w-full my-12 p-4 bg-[#22B9DD] text-[#FFFFFF] rounded-xl'>
            Send Offer

        </button>
          </Link>
      </div>
    </>
  );
};

export default AccountantPage;

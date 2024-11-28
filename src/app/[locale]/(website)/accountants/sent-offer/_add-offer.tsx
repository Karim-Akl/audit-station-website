import Image from 'next/image';
// import accountant from '../../../public/assets/accountant/accountant.jpg';
import { FaStar } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { PiCurrencyDollarSimple } from 'react-icons/pi';
import { IoMdTime } from 'react-icons/io';
import ProfileSection from '@/components/profileSection/ProfileSection';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import SecondHeroBackground from '@/components/helper/SecondHeroBackground';

const AddOffer = async ({
  params: { accountantId },

}: {
  params: {
    accountantId: number;
  };
}) => {

  const locale = await getLocale()
  const experienceSteps = [
    {
      date: '',
      description: 'Contract Type: Full Time',
    },
    {
      date: '',
      description: 'Joining Date:  20th October 2024',
    },
    {
      date: ' ',
      description: 'Payment system:   You will receive a monthly net salary (9,000 $).',
    },
  ];

  const educationSteps = [
    {
      date: '',
      description: 'Complied Bachelor from Oxford University',
      degree: '',
    },
    {
      date: '',
      description: 'Complied Bachelor from Oxford University',
      degree: '',
    },
    {
      date: '',
      description: 'Complied Bachelor from Oxford University',
      degree: '',
    },
  ];

  const professionalCertificatesSteps = [
    {
      date: '',
      description: 'Complied Bachelor from Oxford University',
      degree: '',
    },
    {
      date: '',
      description: '',
      degree: '',
    },
    {
      date: '',
      description: 'Complied Bachelor from Oxford University',
      degree: '',
    },
  ];

  return (
    <>
      {/* <HeroBackground title='Accountant Profile' /> */}
      <SecondHeroBackground
        title="Sent Offer"
        imageShow={false}
        upgradeshow={false}
        step="Home > Accountants Page "
      />
      <div className='border border-gray-200 rounded-lg p-4 container m-auto relative flex flex-col  '>

        <div className='mt-12 shadow shadow-[#00000014] py-4 px-8 rounded-md'>
          <h1 className='text-lg font-bold'>Description</h1>
          <p className='text-[#5C5C5C] mt-4'>
            We’re delighted to extend this offer of employment on behalf of Our Company for ( Junior Accountant Position).
            Please review the attached job offer for your anticipated employment with us, Should you find our job offer satisfactory, kindly reply back with your feedback
            Please note that your onboarding and first working day will be as soon as possible,(20th October 2024)
            We are happy to have you as one of the ( Accountant) team members, and we are looking forward to the impact you will be making on the business.
            Thank you and are all looking forward to meeting you and welcoming you aboard
          </p>
        </div>
        <div className='mt-12 shadow shadow-[#00000014] py-4 px-8 rounded-md'>
          <ProfileSection
            steps={experienceSteps}
            label='Please review the below summary of The Company terms and conditions for your anticipated employment with us.'
          />
        </div>
        <div className='mt-12 shadow shadow-[#00000014] py-4 px-8 rounded-md'>
          <ProfileSection
            steps={educationSteps}
            label='Benefits:'
          />
        </div>
        <div className='mt-12 shadow shadow-[#00000014] py-4 px-8 rounded-md'>
          <ProfileSection
            steps={professionalCertificatesSteps}
            label='Terms and Conditions:'
          />
        </div>
        <Link href={`/${locale}/accountants/send-offer${accountantId}` || ''}>
          <button className='w-full my-12 p-4 bg-[#22B9DD] text-[#FFFFFF] rounded-xl'>
            Send Offer

          </button>
        </Link>
      </div>
    </>
  );
};

export default AddOffer;

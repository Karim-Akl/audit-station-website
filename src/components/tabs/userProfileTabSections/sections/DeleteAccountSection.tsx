import { RiErrorWarningLine } from 'react-icons/ri';
import { IoAdd } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';

const DeleteAccountSection = () => {
  return (
    <div className='lg:ps-6'>
      <h1 className='text-3xl font-semibold my-6'>Delete Account</h1>
      <p className='mb-4'>Are you sure you want to Delete Account?</p>
      <div className='bg-[#FEEEEE] flex items-center gap-2 px-2 py-1 rounded-md'>
        <RiErrorWarningLine />
        <p> You will lose all of your coins when deleting Your account.</p>
      </div>
      <div className='mt-6 flex items-center gap-4 ps-2'>
        <button
          className='flex items-center gap-2 py-3 px-12 rounded-full bg-[#22B9DD] text-white'
          // onClick={handleDeleteAccount}
        >
          <BsArrowLeft
            size={20}
            color='#FFFFFF'
          />
          Cancel
        </button>
        <button className='py-3 px-12 rounded-full bg-white text-[#22B9DD] border border-[#22B9DD]'>
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountSection;

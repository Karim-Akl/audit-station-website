'use client';
import { IoAdd } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import InputAndLabel from '@/components/InputAndLabel/inputAndLabel';
import { useState } from 'react';

const PaymentMethodsSection = () => {
  const [isAddPaymentMethodArea, setIsAddPaymentMethodArea] = useState(false);
  return (
    <div className='lg:ps-6'>
      {isAddPaymentMethodArea ? (
        <>
          <h1 className='text-3xl font-semibold my-6'>Add New Payment Method</h1>
          <div className='w-full flex flex-col gap-6'>
            <InputAndLabel
              label='Payout Account'
              placeholder='Enter Payout Account'
            />
            <InputAndLabel
              label='Holder Name'
              placeholder='Enter Holder Name'
            />
            <InputAndLabel
              label='Card Number'
              placeholder='Enter Card Number'
            />
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-4'>
              <div className='col-span-1'>
                <InputAndLabel
                  label='Cvv'
                  placeholder='Enter Enter Cvv'
                />
              </div>
              <div className='col-span-1'>
                <InputAndLabel
                  label='Expire Date'
                  placeholder='Enter Expire Date'
                />
              </div>
            </div>
          </div>
          <div className='mt-4 flex items-center gap-4 ps-2'>
            <button
              className='flex items-center gap-2 py-4 px-12 rounded-full bg-white text-[#22B9DD] border border-[#22B9DD]'
              onClick={() => setIsAddPaymentMethodArea(false)}
            >
              <BsArrowLeft
                size={20}
                color='#22B9DD'
              />
              Back
            </button>
            <button
              className='flex items-center gap-2 py-4 px-12 rounded-full bg-[#22B9DD] text-white'
              // onClick={handleAddPaymentMethod}
            >
              <IoAdd
                size={20}
                color='#FFFFFF'
              />
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='my-8 flex items-center justify-between'>
            <h1 className='text-3xl font-semibold'>PaymentMethods</h1>
            <button
              className='flex items-center gap-2 px-8 py-4 bg-[#22B9DD] text-[#FFFFFF] rounded-xl'
              onClick={() => setIsAddPaymentMethodArea(true)}
            >
              <IoAdd
                size={20}
                color='#FFFFFF'
              />
              Add New Method
            </button>
          </div>
          <table className='w-full'>
            <tr className='bg-[#E9F8FC] text-center'>
              <td className='p-2'>NO.</td>
              <td>Payout Account</td>
              <td>Card Num.</td>
              <td>Expire Date</td>
              <td>Cvv</td>
              <td>Action</td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
};

export default PaymentMethodsSection;

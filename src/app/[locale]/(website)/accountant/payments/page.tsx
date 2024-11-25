import Image from 'next/image';
import React from 'react';
import fristIcon from '@/../public/assets/profile/Background+Border.svg';
import secondIcon from '@/../public/assets/profile/Background+Border (1).svg';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';

const payments = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
];
export const metadata = {
  title: 'Payments | Instructor',
  description: 'Payments Page',
};
export default async function ProfilePayment() {
  const locale = await getLocale();
  return (
    <div className='mb-20 '>
      <div>
        <div className=' w-full py-2 mb-2 font-sans'>
          <h2 className='text-4xl text-[#333333] font-semibold'>Payments</h2>
          <p className='text-[#767676] text-xl font-medium'>
            Here’s an overview of all your transactions and balances here.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-6 '>
          <Link href={`/${locale}/profile/coins` || '/'}>
            <div className='flex flex-col gap-4 items-center justify-center shadow py-10 px-14 hover:bg-[#22B9DD] text-[#333333] hover:shadow-[2_2px_8px_rgba(61,61,61,0.50)] hover:text-white '>
              <Image
                src={fristIcon}
                alt='logo'
                width={100}
                height={100}
              />

              <p className=' text-3xl font-semibold'>201346 </p>
              <h3 className='text-2xl  font-semibold'>Coins</h3>
            </div>
          </Link>
          <Link href={`/${locale}/profile/order-history` || '/'}>
            <div className='flex flex-col gap-4 items-center justify-center shadow py-10 px-14 hover:bg-[#22B9DD] text-[#333333] hover:shadow-[2_2px_8px_rgba(61,61,61,0.50)] hover:text-white '>
              <Image
                src={secondIcon}
                alt='logo'
                width={100}
                height={100}
              />

              <p className=' text-3xl font-semibold'>4</p>
              <h3 className='text-2xl  font-semibold'>Order History</h3>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className=' w-full md:mt-8 my-4 mb-2 font-sans'>
          <h2 className='text-4xl text-[#333333] font-semibold'>Coins</h2>
        </div>
        <Table className='my-8'>
          <TableCaption>A list of your recent payments.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className='font-medium'>{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className='text-right'>$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

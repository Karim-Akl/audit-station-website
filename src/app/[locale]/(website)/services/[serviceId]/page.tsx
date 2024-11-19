import FormattedText from '@/components/formattedText/FormattedText';
import HeroBackground from '@/components/helper/HeroBackground';
import { BASE_URL } from '@/lib/actions/actions';
import { fetchData } from '@/lib/api/fetchData';
import axios from 'axios';
import Image from 'next/image';

const Service = async ({ params: { serviceId } }: { params: { serviceId: string } }) => {
  const data = await fetchData({ endPoint: `/api/public/services/${serviceId}` });
  return (
    <>
      <HeroBackground title='Service' />
      <div className='container my-16'>
        <div className='w-[100px] h-[100px] relative mx-auto'>
          <Image
            src={data?.image}
            alt='logo'
            layout='fill'
            className='object-cover rounded-full'
            width={0}
          />
        </div>
        <h4 className='text-center font-semibold mt-3'>{data?.title}</h4>
        <p className='mt-8 text-center'>{data?.description}</p>{' '}
        <p className='text-center mt-2'>{data?.status ? 'available' : 'not-available'}</p>
      </div>
    </>
  );
};

export default Service;

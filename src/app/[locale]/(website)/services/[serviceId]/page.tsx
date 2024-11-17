import FormattedText from '@/components/formattedText/FormattedText';
import HeroBackground from '@/components/helper/HeroBackground';
import { BASE_URL } from '@/lib/actions/actions';
import { fetchData } from '@/lib/api/fetchData';
import axios from 'axios';

const Service = async ({ params: { serviceId } }: { params: { serviceId: string } }) => {
  const data = await fetchData({ endPoint: `/api/public/services/${serviceId}` });
  return (
    <>
      <HeroBackground title='Service' />
      <div className='container my-16'>
        <h1>{data?.data?.title}</h1>
      </div>
    </>
  );
};

export default Service;

import FormattedText from '@/components/formattedText/FormattedText';
import HeroBackground from '@/components/helper/HeroBackground';
import { fetchData } from '@/lib/api/fetchData';

const PrivacyPolicy = async () => {
  const data = await fetchData({endPoint: '/api/public/privacy_policy'})
  return (
    <>
      <HeroBackground title='Conditions and Privacy Policy' />
      <div className='container my-16'>
        <FormattedText htmlText={data?.content} />
      </div>
    </>
  );
};

export default PrivacyPolicy;

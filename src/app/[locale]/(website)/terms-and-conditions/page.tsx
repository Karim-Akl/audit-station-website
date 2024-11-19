import FormattedText from '@/components/formattedText/FormattedText';
import HeroBackground from '@/components/helper/HeroBackground';
import { fetchData } from '@/lib/api/fetchData';

const TermsAndConditions = async () => {
  const data = await fetchData({endPoint: '/public/terms_and_conditions'})
  return (
    <>
      <HeroBackground title='Terms and Conditions' />
      <div className='container my-16'>
        <FormattedText htmlText={data?.content} />
      </div>
    </>
  );
};

export default TermsAndConditions;

import FormattedText from '@/components/formattedText/FormattedText';
import HeroBackground from '@/components/helper/HeroBackground';
import { BASE_URL } from '@/lib/actions/actions';
import axios from 'axios';

const TermsAndConditions = async () => {
  const termsAndConditions = await axios.get(`${BASE_URL}/public/terms_and_conditions`);
  const data = termsAndConditions?.data?.data;
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

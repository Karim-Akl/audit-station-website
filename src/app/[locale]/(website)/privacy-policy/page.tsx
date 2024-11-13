import FormattedText from '@/components/formattedText/FormattedText';
import HeroBackground from '@/components/helper/HeroBackground';
import { BASE_URL } from '@/lib/actions/actions';
import axios from 'axios';

const PrivacyPolicy = async () => {
  const privacyPolicy = await axios.get(`${BASE_URL}/api/public/privacy_policy`);
  const data = privacyPolicy?.data?.data;
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

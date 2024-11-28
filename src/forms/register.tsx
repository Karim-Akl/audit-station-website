'use client';
import { Input } from '@/components/ui/input';
import { PhoneInput } from '@/components/ui/phone-input';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FC, FormEvent, useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineHome } from 'react-icons/ai'; // Icons
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { BASE_URL } from '@/lib/constants/constants';
import { toast } from 'sonner';
import { FaApple } from 'react-icons/fa6';
import { signInWithSSOProvider } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const Register: FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isRequired, setIsRequired] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    rememberMe: false,
  });

  useEffect(() => {
    const { name, email, phone, password, password_confirmation, rememberMe } = formData;
    setFormValid(
      name.trim() !== '' &&
        email.trim() !== '' &&
        phone !== '' &&
        password.trim() !== '' &&
        password_confirmation.trim() !== '' &&
        rememberMe,
    );
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRequired(!isRequired);
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const phone = formData.get('phone')?.toString().replace(/\s+/g, '');
      formData.set('phone', phone || '');
      const response = await fetch(`${BASE_URL}/auth/register/user`, {
        method: 'POST',
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      console.log(data);
      if (data.type === 'success') {
        toast.success(data.message);
        router.push(`/${locale}/otp?email=${formData.get('email')}`);
      }
      if (data.type === 'error') {
        toast.warning(data.message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className=' p-8 rounded-lg shadow-lg max-w-lg w-full'>
        <h2 className='text-[31px] font-semibold text-center mb-6'>Create your account</h2>
        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm mb-2'
              htmlFor='fullname'
            >
              Full Name <span className='text-red-600'>*</span>
            </label>
            <div className='flex items-center border border-gray-300 rounded-md px-3 py-2'>
              <AiOutlineHome className='text-gray-400 mr-2' />
              <input
                id='fullname'
                name='name'
                type='text'
                className='outline-none w-full text-sm'
                placeholder='Enter your Full Name'
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm mb-2'
              htmlFor='email'
            >
              Email <span className='text-red-600'>*</span>
            </label>
            <div className='flex items-center border border-gray-300 rounded-md px-3 py-2'>
              <AiOutlineMail className='text-gray-400 mr-2' />
              <input
                id='email'
                type='email'
                name='email'
                className='outline-none w-full text-sm'
                placeholder='Enter your email'
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm mb-2'
              htmlFor='phone'
            >
              Phone Number<span className='text-red-600'>*</span>
            </label>
            <PhoneInput
              placeholder='Enter a phone number'
              name='phone'
              defaultCountry='AE'
              onChange={(value) => setFormData({ ...formData, phone: value })}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm mb-2'
              htmlFor='password'
            >
              Password<span className='text-red-600'>*</span>
            </label>
            <div className='flex items-center border border-gray-300 rounded-md px-3 py-2'>
              <AiOutlineLock className='text-gray-400 mr-2' />
              <input
                itemScope
                id='password'
                type='password'
                name='password'
                className='outline-none w-full text-sm'
                placeholder='Enter your password'
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm mb-2'
              htmlFor='confirmpassword'
            >
              Confirm Password<span className='text-red-900'>*</span>
            </label>
            <div className='flex items-center border border-gray-300 rounded-md px-3 py-2'>
              <AiOutlineLock className='text-gray-400 mr-2' />
              <input
                itemScope
                id='confirmpassword'
                name='password_confirmation'
                type='password'
                className='outline-none w-full text-sm'
                placeholder='Enter your password'
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex items-center mb-4'>
            <input
              id='rememberMe'
              type='checkbox'
              name='rememberMe'
              className='mr-2'
              required
              onChange={handleChange}
            />
            <label
              htmlFor='rememberMe'
              className='text-sm text-gray-700'
            >
              By Signing Up, you agree to our{' '}
              <Link href={`/${locale}/registration/conditions-and-privacy-policy` || '/'}>
                <span className='text-[#1FA8C9]'>Conditions and Privacy Policy</span>{' '}
              </Link>
            </label>
          </div>

          <button
            type='submit'
            className={`${isRequired? 'bg-gray-400 cursor-auto': 'bg-[#22b8dd94] hover:bg-[#22B9DD] cursor-pointer'} w-full py-2 text-white rounded-md transition duration-300`}
            disabled={!formValid || isLoading}
          >
            {isLoading ? 'Loading...' : ' Sign Up'}
          </button>

          <div className='my-4 text-center text-sm text-gray-600'>Or Register with</div>
          <div className='flex justify-center space-x-4 mb-4'>
            <button
              type='button'
              onClick={() => signInWithSSOProvider('google')}
              className='border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300'
            >
              <FaGoogle className='text-red-500' />
            </button>
            <button
              type='button'
              onClick={() => signInWithSSOProvider('apple')}
              className='border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300'
            >
              <FaApple className='text-black' />
            </button>
          </div>

          <div className='text-center text-sm'>
            Already have an account?{' '}
            <Link
              href={`login`}
              className='text-blue-500 hover:underline'
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

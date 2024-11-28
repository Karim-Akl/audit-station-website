'use client';
import { signInWithSSOProvider } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'; // Icons
import { FaGoogle } from 'react-icons/fa';
import { setSession } from '@/app/[locale]/actions/setSession';
import { toast } from 'sonner';
import { FaApple } from 'react-icons/fa6';
import { BASE_URL } from '@/lib/constants/constants';

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const { email, password } = formValues;
    setIsFormValid(email !== '' && password !== '');
  }, [formValues]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      await fetch('/sanctum/csrf-cookie', {
        credentials: 'include',
      });
  
      const xsrfToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1];
  
      const response = await fetch(`${BASE_URL}/auth/login/mobile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(xsrfToken && { 'X-XSRF-TOKEN': decodeURIComponent(xsrfToken) }),
        },
        body: JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
        credentials: 'include', 
      });
  
      console.log('response: ', response);
  
      const data = await response.json();
      if (data.type === 'success') {
        toast.success(data.message);
        console.log('data: ', data);
        setSession(data);
      }
      if (data.type === 'error') {
        toast.warning(data.message);
      }
  
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false)
    }
  }
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className=' p-8 rounded-lg shadow-lg max-w-lg w-full'>
        <h2 className='text-[31px] font-semibold text-center mb-6'>Welcome Back!</h2>
        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <div className='flex items-center border border-gray-300 rounded-md px-3 py-2'>
              <AiOutlineMail className='text-gray-400 me-2' />
              <input
                id='email'
                type='email'
                name='email'
                className='outline-none w-full text-sm'
                placeholder='Enter your email'
                required
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <div className='flex items-center border border-gray-300 rounded-md px-3 py-2'>
              <AiOutlineLock className='text-gray-400 me-2' />
              <input
                itemScope
                id='password'
                type='password'
                name='password'
                className='outline-none w-full text-sm'
                placeholder='Enter your password'
                required
                value={formValues.password}
                onChange={handleInputChange}
              />
            </div>
            <div className='text-right mt-2'>
              <Link
                href='forgot-password'
                className='text-sm text-[#2695B3] hover:underline'
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className='flex items-center mb-4'>
            <input
              id='rememberMe'
              type='checkbox'
              className='me-2'
            />
            <label
              htmlFor='rememberMe'
              className='text-sm text-gray-700'
            >
              Remember me
            </label>
          </div>

          <button
            type='submit'
            className='bg-[#22b8dd94] w-full py-2 text-white rounded-md hover:bg-[#22B9DD] transition duration-300'
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>

          <div className='my-4 text-center text-sm text-gray-600'>Or login with</div>

          <div className='flex justify-center gap-4 mb-4'>
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
            Don’t have an account?{' '}
            <Link
              href={`registration`}
              className='text-blue-500 hover:underline'
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

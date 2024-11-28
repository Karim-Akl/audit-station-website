'use client';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { BASE_URL } from '@/lib/constants/constants';
import { useLocale } from 'next-intl';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { toast } from 'sonner';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
interface otpProps {
  email: string;
  resetpassword?: boolean;
}
export function InputOTPPattern({ email, resetpassword }: otpProps) {
  console.log(email);
  const locale = useLocale();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);
  const [otp, setOtp] = useState<string>('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch(`${BASE_URL}/auth/password/validate_code`, {
        method: 'POST',
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      console.log(data);
      if (data.type === 'success') {
        toast.success(data.message);
        router.push(`/${locale}/login`);
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
  async function ResendResetPasswordOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIsLoading(true);
    router.push(
      `/${locale}/reset-password?email=${formData.get('handle')}&code=${formData.get('otp')}`,
    );
  }

  async function ResendOtp() {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/auth/password/forgot_password`, {
        method: 'POST',
        body: JSON.stringify({ email: '' }),
      });
      const data = await response.json();
      if (data.type === 'success') {
        toast.success(data.message);
        router.push(`/${locale}/otp`);
      }
      if (data.type === 'error') {
        toast.warning(data.message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000); // 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='flex justify-center items-center h-screen space-y-4 '>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg w-full'>
        <h2 className='text-[31px] font-semibold text-center text-[#333] mb-2'>OTP</h2>
        <p className='text-[16px] font-medium text-center text-[#767676]'>
          An account activation code has been sent to your email
        </p>
        <p className='text-[16px] font-medium text-center text-[#1D748B]'>exam***************</p>
        <form
          onSubmit={resetpassword ? ResendResetPasswordOtp : onSubmit}
          className='flex flex-col justify-center items-center space-y-4 '
        >
          <input
            name='handle'
            type='email'
            hidden
            value={email}
          />
          <InputOTP
            maxLength={4}
            size={4}
            name='code'
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            className='flex justify-center items-center space-x-4'
          >
            <InputOTPGroup className='gap-2 p-2'>
              <InputOTPSlot
                className='border-[#1FA8C9]'
                index={0}
              />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>

          <Button
            type='submit'
            disabled={isLoading}
            className='w-full bg-[#22B9DD]'
          >
            {isLoading ? '...loading' : 'Verify'}
          </Button>
          <div className='flex justify-around w-full items-center'>
            <p>
              Your code will expire in{' '}
              <span className='text-[#F55157]'>
                00:{timer ? timer : timer == 0 ? '00' : timer}seconds
              </span>
            </p>
            <button
              className='text-[#1FA8C9]'
              onClick={ResendOtp}
              disabled={timer > 0}
            >
              Resend ?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

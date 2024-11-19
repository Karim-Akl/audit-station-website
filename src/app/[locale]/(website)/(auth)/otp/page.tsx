import HeroBackground from "@/components/helper/HeroBackground";
import { InputOTPPattern } from "@/forms/otpInputs";
import Head from "next/head";

interface otpProps {
  searchParams: {
    email: string;
    resetpassword?: boolean;
  };
}
export default function OtpPage({
  searchParams: { email },
  searchParams: { resetpassword },
}: otpProps) {
 
  return (
    <>
      <Head>
        <title>OTP</title>
        <meta name="description" content="OTP Page" />
      </Head>
      <main className="relative overflow-hidden">
        <HeroBackground title="Otp" />
        <div>
          <InputOTPPattern email={email} resetpassword={resetpassword}  />
        </div>
      </main>
    </>
  );
}

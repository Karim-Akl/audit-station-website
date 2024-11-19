import HeroBackground from "@/components/helper/HeroBackground";
import ResetPassword from "@/forms/reset-password";
import Head from "next/head";

interface resetPasswordProps {
  searchParams: {
    email: string;
    otp: number;
  };
}
export default function ResetPasswordPage({
  searchParams: { email },
  searchParams: { otp },
}: resetPasswordProps) {
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="description" content="Reset Password Page" />
      </Head>
      <main className="relative overflow-hidden">
        <HeroBackground title="Reset Password" />
        <div>
          <ResetPassword email={email} otp={otp} />
        </div>
      </main>
    </>
  );
}

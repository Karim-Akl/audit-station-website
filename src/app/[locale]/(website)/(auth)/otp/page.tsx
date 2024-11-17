import HeroBackground from "@/components/helper/HeroBackground";
import { InputOTPPattern } from "@/forms/otpInputs";

interface otpProps {
  searchParams: {
    email: string;
  };
}
export default function OtpPage({ searchParams: email }: otpProps) {
  console.log(email);

  return (
    <main className="relative overflow-hidden">
      <HeroBackground title="Otp" />
      <div>
        <InputOTPPattern email={email.email} />
      </div>
    </main>
  );
}

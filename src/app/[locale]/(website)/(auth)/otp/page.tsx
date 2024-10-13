import HeroBackground from "@/components/helper/HeroBackground";
import Login from "@/forms/login";
import { OtpInput } from "@/forms/otpInputs";

export default function OtpPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroBackground title="Otp" />
      <div>
        <OtpInput />
      </div>
    </main>
  );
}

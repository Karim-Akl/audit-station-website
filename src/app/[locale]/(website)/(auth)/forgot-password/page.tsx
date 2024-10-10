import HeroBackground from "@/components/helper/HeroBackground";
import ForgotPassword from "@/forms/forgot-password";

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroBackground title="Forgot Password" />
      <div>
        <ForgotPassword/>
      </div>
    </main>
  );
}

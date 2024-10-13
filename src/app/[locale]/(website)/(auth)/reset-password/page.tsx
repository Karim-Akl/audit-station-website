import HeroBackground from "@/components/helper/HeroBackground";
import ResetPassword from "@/forms/reset-password";

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroBackground title="Reset Password" />
      <div>
        <ResetPassword/>
      </div>
    </main>
  );
}

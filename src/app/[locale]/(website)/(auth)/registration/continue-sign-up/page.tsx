import ContinueSignUp from "@/components/continueSignUp/ContinueSignUp";
import HeroBackground from "@/components/helper/HeroBackground";

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroBackground title=" Continue Sign Up" />
      <div>
        <ContinueSignUp />
      </div>
    </main>
  );
}

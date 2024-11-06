import HeroBackground from "@/components/helper/HeroBackground";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroBackground title=" Conditions and Privacy Policy" />
      <div>
        <PrivacyPolicy />
      </div>
    </main>
  );
}

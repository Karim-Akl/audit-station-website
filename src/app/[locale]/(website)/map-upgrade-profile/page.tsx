import SecondHeroBackground from "@/components/helper/SecondHeroBackground";
import ContinueSignUp from "@/components/continueSignUp/ContinueSignUp";
export default function RegistrationPage() {


  return (
    <main className="relative overflow-hidden">
      <SecondHeroBackground
        imageShow={true}
        upgradeshow={true}
        title="Jane Cooper"
        email="alma.lawson@example.com"
      />
      <div>
        <ContinueSignUp buttonShow={false} />
      </div>
    </main>
  );
}

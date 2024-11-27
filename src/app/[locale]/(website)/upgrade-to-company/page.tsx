import SecondHeroBackground from "@/components/helper/SecondHeroBackground";
import BecomeAnInstructor from "@/forms/become-an-company";

export default function RegistrationPage() {
  return (
    <main className="relative overflow-hidden">
      <SecondHeroBackground
        imageShow={false}
        upgradeshow={false}
        title="Upgrade to Company"
        email="upgrade profile"
      />
      <div>
        <BecomeAnInstructor />
      </div>
    </main>
  );
}

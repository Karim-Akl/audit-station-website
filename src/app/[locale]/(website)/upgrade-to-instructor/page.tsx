import SecondHeroBackground from "@/components/helper/SecondHeroBackground";
import BecomeAnInstructor from "@/forms/become-an-Instructor";

export default function RegistrationPage() {
  return (
    <main className="relative overflow-hidden">
      <SecondHeroBackground
        imageShow={false}
        upgradeshow={false}
        title="Upgrade to Instructor"
        email="upgrad profile"
      />
      <div>
        <BecomeAnInstructor />
      </div>
    </main>
  );
}

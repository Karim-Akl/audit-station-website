import UpgradeToAccountant from "@/components/accountantSection/UpgradeToAccountant";
import SecondHeroBackground from "@/components/helper/SecondHeroBackground";

export default function RegistrationPage() {
  return (
    <main className="relative overflow-hidden">
      <SecondHeroBackground
        imageShow={false}
        upgradeshow={false}
        title="Upgrade to Instructor"
        email="upgrad profile"
      />
      <UpgradeToAccountant />
    </main>
  );
}

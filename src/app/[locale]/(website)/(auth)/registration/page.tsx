import HeroBackground from "@/components/helper/HeroBackground";
import Register from "@/forms/register";

export default function RegistrationPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroBackground title="Registration" />
      <div>
        <Register />
      </div>
    </main>
  );
}

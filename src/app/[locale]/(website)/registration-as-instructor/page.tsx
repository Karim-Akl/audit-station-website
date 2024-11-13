import HeroBackground from "@/components/helper/HeroBackground";
import RegisterAsInstructor from "@/forms/register-as-Instructor";

export default function RegistrationPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroBackground title="Registration as instructor" />
      <div>
        <RegisterAsInstructor />
      </div>
    </main>
  );
}

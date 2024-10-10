import HeroBackground from "@/components/helper/HeroBackground";
import Login from "@/forms/login";

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroBackground title="Login" />
      <div>
        <Login />
      </div>
    </main>
  );
}

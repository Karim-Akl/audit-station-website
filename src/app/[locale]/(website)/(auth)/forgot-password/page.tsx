import HeroBackground from "@/components/helper/HeroBackground";
import ForgotPassword from "@/forms/forgot-password";
import Head from "next/head";

export default function ForgotPasswordPage() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Forgot Password Page" />
      </Head>
      <main className="relative overflow-hidden">
        <HeroBackground title="Forgot Password" />
        <div>
          <ForgotPassword />
        </div>
      </main>
    </>
  );
}

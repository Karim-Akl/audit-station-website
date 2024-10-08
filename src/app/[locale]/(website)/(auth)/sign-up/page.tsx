import CertificateHeader from "@/components/helper/breadcrumb";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <section>
      <CertificateHeader
        title="Login"
        MainLink="/"
        MainTitle="Home"
        items={[{ link: "home", title: "Home" }]}
      />
      <div className="w-full h-screen hidden lg:block">
        <Image
          src="/authImage.png"
          width={600}
          height={400}
          alt="auth image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

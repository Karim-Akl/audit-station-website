import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="md:p-16 container  text-gray-800  mx-auto font-sans">
      {/* Section 1 */}
      <section className="mb-6">
        <h2 className="text-[39px]  font-semibold text-[#18839D]  mb-2">1. Introduction</h2>
        <p>
          At Audit Stations your privacy is important to us. This policy explains what information we collect,
          how we use it, and how we protect it.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-[39px] font-semibold text-[#18839D]  mb-2">2. Information We Collect</h2>
        <p>We may collect:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Personal Information: Name, email, phone number, payment details, etc.</li>
          <li>Usage Data: Information like your IP address, browser type, and pages visited.</li>
          <li>Cookies: Small files that help us improve your experience.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-6">
        <h2 className="text-[39px] font-semibold text-[#18839D]  mb-2">3. How We Use Your Information</h2>
        <div className="border border-[#18839D]  p-4 rounded-md">
          <p>We use your information to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Provide and improve our services.</li>
            <li>Process payments and manage your account.</li>
            <li>Send you updates and promotions (if you agree).</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-6">
        <h2 className="text-[39px] font-semibold text-[#18839D]  mb-2">4. Sharing Your Information</h2>
        <p>We may share your information with:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Service providers who help us operate (like payment processors).</li>
          <li>Legal authorities if required by law.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-6">
        <h2 className="text-[39px] font-semibold text-[#18839D]  mb-2">5. Data Security</h2>
        <p>
          We do our best to protect your data, but no method is 100% secure.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-6">
        <h2 className="text-[39px] font-semibold text-[#18839D]  mb-2">6. Your Rights</h2>
        <p>You can:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Access and update your personal info.</li>
          <li>Ask us to delete your data.</li>
          <li>Opt out of marketing emails.</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

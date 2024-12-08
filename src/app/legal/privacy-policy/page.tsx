import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/ui/Section";

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <Section
        title="Privacy Policy"
        subtitle="Last updated: December 8, 2024"
        className="bg-neutral-light"
      >
        <div className="prose prose-neutral max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including when you:
          </p>
          <ul>
            <li>Book an appointment</li>
            <li>Create an account</li>
            <li>Sign up for our newsletter</li>
            <li>Contact us for support</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process your appointments</li>
            <li>Send you appointment reminders</li>
            <li>Communicate with you about our services</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul>
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: info@etrithair.com</li>
            <li>Phone: +355 69 XXX XXXX</li>
          </ul>
        </div>
      </Section>
    </PageWrapper>
  );
}

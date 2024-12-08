import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/ui/Section";

export default function CookiePolicy() {
  return (
    <PageWrapper>
      <Section
        title="Cookie Policy"
        subtitle="Last updated: December 8, 2024"
        className="bg-neutral-light"
      >
        <div className="prose prose-neutral max-w-none">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit our website.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies to:
          </p>
          <ul>
            <li>Remember your preferences</li>
            <li>Understand how you use our website</li>
            <li>Improve your browsing experience</li>
            <li>Provide personalized content</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>
            Required for the website to function properly. These cannot be disabled.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            Help us understand how visitors interact with our website.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            Remember your preferences and enable enhanced functionality.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your website experience.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions about our Cookie Policy, please contact us at:
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

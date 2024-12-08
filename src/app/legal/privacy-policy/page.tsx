import { Section } from "@/components/ui/Section";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* Header Section */}
          <div className="border-b border-neutral-200 pb-8 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
            <p className="text-neutral-600">Last updated: December 8, 2024</p>
          </div>
          
          <div className="prose prose-neutral max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl prose-p:text-neutral-600 prose-li:text-neutral-600">
            <section className="mb-12">
              <h2 className="text-neutral-900">1. Introduction</h2>
              <p>
                At Etrit Hair, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                and protect your personal information when you use our website and services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">2. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-neutral-800">Personal Information</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Name and contact details</li>
                    <li>Appointment booking information</li>
                    <li>Service preferences and history</li>
                    <li>Payment information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-neutral-800">Technical Information</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Usage data and cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Process your appointments and payments</li>
                <li>Provide and improve our services</li>
                <li>Send you important updates and notifications</li>
                <li>Personalize your experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please contact us:
              </p>
              <div className="bg-neutral-50 p-6 rounded-lg mt-4">
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-center space-x-2">
                    <span className="font-medium">Email:</span>
                    <a href="mailto:info@etrithair.com" className="text-primary hover:text-primary-dark transition-colors">
                      info@etrithair.com
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="font-medium">Phone:</span>
                    <a href="tel:+35569XXXXXX" className="text-primary hover:text-primary-dark transition-colors">
                      +355 69 XXX XXXX
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

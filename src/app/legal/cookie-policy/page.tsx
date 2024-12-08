import { Section } from "@/components/ui/Section";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* Header Section */}
          <div className="border-b border-neutral-200 pb-8 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Cookie Policy</h1>
            <p className="text-neutral-600">Last updated: December 8, 2024</p>
          </div>
          
          <div className="prose prose-neutral max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl prose-p:text-neutral-600 prose-li:text-neutral-600">
            <section className="mb-12">
              <h2 className="text-neutral-900">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit our website.
                They help us provide you with the best possible experience and allow certain features to work.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">2. How We Use Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience and improve our services:
              </p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve your browsing experience</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">3. Types of Cookies We Use</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-neutral-800">Essential Cookies</h3>
                  <p>
                    Required for the website to function properly. These cannot be disabled as they are necessary for basic website functionality.
                  </p>
                </div>

                <div>
                  <h3 className="text-neutral-800">Analytics Cookies</h3>
                  <p>
                    Help us understand how visitors interact with our website, allowing us to improve our services and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-neutral-800">Functional Cookies</h3>
                  <p>
                    Remember your preferences and enable enhanced functionality and personalization.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">4. Managing Cookies</h2>
              <p>
                You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your website experience and limit certain functionalities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">5. Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please don't hesitate to contact us:
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

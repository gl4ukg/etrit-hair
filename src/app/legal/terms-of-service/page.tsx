import { Section } from "@/components/ui/Section";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* Header Section */}
          <div className="border-b border-neutral-200 pb-8 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Terms of Service</h1>
            <p className="text-neutral-600">Last updated: December 8, 2024</p>
          </div>
          
          <div className="prose prose-neutral max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl prose-p:text-neutral-600 prose-li:text-neutral-600">
            <section className="mb-12">
              <h2 className="text-neutral-900">1. Agreement to Terms</h2>
              <p>
                By accessing and using Etrit Hair's website and services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">2. Booking and Cancellation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-neutral-800">Appointment Booking</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Appointments must be booked in advance</li>
                    <li>A valid contact number is required</li>
                    <li>Specific service preferences should be noted during booking</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-neutral-800">Cancellation Policy</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>24-hour notice required for cancellations</li>
                    <li>Late cancellations may incur a fee</li>
                    <li>No-shows will be charged the full service amount</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">3. Service Pricing</h2>
              <p>
                Our prices are subject to change without notice. Current prices are always available on our website 
                and in the salon. Additional charges may apply for:
              </p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Extra-long or thick hair</li>
                <li>Additional treatments</li>
                <li>Specialty services</li>
                <li>Product usage beyond standard amounts</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">4. Your Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Arrive on time for appointments</li>
                <li>Provide accurate information about your hair history</li>
                <li>Follow aftercare instructions</li>
                <li>Treat staff and other clients with respect</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">5. Liability</h2>
              <p>
                While we strive to provide the best possible service, we cannot guarantee specific results. 
                We are not liable for any indirect, incidental, or consequential damages arising from our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-neutral-900">6. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
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

import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/ui/Section";

export default function TermsOfService() {
  return (
    <PageWrapper>
      <Section
        title="Terms of Service"
        subtitle="Last updated: December 8, 2024"
        className="bg-neutral-light"
      >
        <div className="prose prose-neutral max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. Service Description</h2>
          <p>
            We provide hair styling, makeup, and beauty services. All services are subject to availability and professional discretion.
          </p>

          <h2>3. Booking and Cancellation</h2>
          <ul>
            <li>Appointments must be booked in advance</li>
            <li>24-hour cancellation notice required</li>
            <li>Late cancellations may incur a fee</li>
            <li>No-shows will be charged the full service amount</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Payment is required at the time of service. We accept:
          </p>
          <ul>
            <li>Cash</li>
            <li>Credit/Debit cards</li>
            <li>Mobile payments</li>
          </ul>

          <h2>5. Client Responsibilities</h2>
          <ul>
            <li>Arrive on time for appointments</li>
            <li>Inform us of any allergies or sensitivities</li>
            <li>Follow aftercare instructions</li>
            <li>Treat staff with respect</li>
          </ul>

          <h2>6. Contact Information</h2>
          <p>
            For questions about these terms, please contact us at:
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

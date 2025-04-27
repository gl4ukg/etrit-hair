import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/salon/about-salon.jpg"
                alt="Etrit Hair Salon"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Column */}
            <div className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Your Journey to Beautiful Hair Starts Here
              </h2>
              
              <div className="space-y-6 text-neutral-600">
                <p>
                  Welcome to Etrit Hair, where passion meets precision in the art of hairstyling. 
                  Founded by master stylist Etrit Tullumi, our salon has been transforming looks and 
                  boosting confidence for over a decade.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-neutral-900">Our Philosophy</h3>
                  <p>
                    We believe that every client deserves a personalized experience that reflects 
                    their individual style and personality. Our approach combines classic techniques 
                    with contemporary trends to create looks that are both timeless and modern.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 py-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-neutral-600">Years of Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-neutral-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-neutral-600">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-neutral-600">Award Winning Styles</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-neutral-900">Our Commitment</h3>
                  <p>
                    We're committed to using only premium products and staying ahead of industry 
                    trends through continuous education. Our team regularly participates in 
                    international workshops and training to bring you the latest in hair care 
                    and styling.
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="/booking"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors duration-300"
                  >
                    Book Your Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

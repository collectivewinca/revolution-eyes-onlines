import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FeaturedEyewear } from "@/components/FeaturedEyewear";
import { Button } from "@/components/ui/button";
import { Eye, Glasses, Heart, MapPin, Phone, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Modern optometry office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Revolution Eyes: Tribeca's Premier Optometry Practice
            </h1>
            <p className="text-xl mb-8">
              Providing exceptional eye care to the Tribeca community since 2008. Experience the perfect blend of expertise and style.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Eye Exam
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              Icon={Eye}
              title="Comprehensive Eye Exams"
              description="Thorough vision and eye health assessments using state-of-the-art technology."
            />
            <ServiceCard 
              Icon={Glasses}
              title="Eyewear Styling"
              description="Expert assistance in finding the perfect frames to match your style and needs."
            />
            <ServiceCard 
              Icon={Heart}
              title="Contact Lens Fittings"
              description="Personalized contact lens consultations and fittings for optimal comfort."
            />
          </div>
        </div>
      </section>

      {/* Featured Eyewear Section */}
      <FeaturedEyewear />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Visit Us in Tribeca</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5 mt-1" />
                  <p>25 Murray Street<br />New York, NY</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <p>(212) 555-0123</p>
                </div>
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00981682427994!3d40.71430427132896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f33f4b837%3A0x7920a4b0c8bc6246!2s25%20Murray%20St%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1710834050087!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
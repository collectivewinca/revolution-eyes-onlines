import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Eye, Glasses, Heart, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-pattern py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Tribeca's Premier Optometry Practice
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Providing exceptional eye care to the Tribeca community since 2008. Experience the perfect blend of expertise and style.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Book Your Eye Exam
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Location Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Visit Us in Tribeca</h2>
              <div className="flex items-start space-x-2 text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mt-1" />
                <p>123 Greenwich Street<br />New York, NY 10007</p>
              </div>
              <Button variant="outline" className="mt-4">
                Get Directions
              </Button>
            </div>
            <div className="flex-1 h-[400px] w-full bg-secondary rounded-lg">
              {/* Map would go here - implement with Google Maps */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
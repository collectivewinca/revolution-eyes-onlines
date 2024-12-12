import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Eye, Glasses, Heart, MapPin, Phone, Calendar, User } from "lucide-react";

const Index = () => {
  const testimonials = [
    {
      text: "The team at Revolution Eyes provided exceptional care. My new glasses are perfect!",
      author: "Sarah M."
    },
    {
      text: "Best eye care experience I've had in Tribeca. Professional and friendly staff.",
      author: "Michael R."
    },
    {
      text: "They made the entire process so easy and comfortable. Highly recommend!",
      author: "David L."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            alt="Modern office building"
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

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">About Revolution Eyes</h2>
              <p className="text-gray-600 mb-4">
                Located in the heart of Tribeca, Revolution Eyes has been providing exceptional eye care services since 2008. Our commitment to using the latest technology, combined with our experienced staff, ensures that you receive the highest quality eye care available.
              </p>
              <p className="text-gray-600">
                We believe that clear vision is essential to your quality of life, and we're dedicated to helping you achieve optimal eye health while finding the perfect eyewear to match your style.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Modern workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
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

      {/* Eyewear Section */}
      <section id="eyewear" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Featured Eyewear</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
              alt="Stylish glasses"
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Modern frames"
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
              alt="Designer eyewear"
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="text-center">
            <Button variant="outline" className="bg-white">
              View Full Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <User className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-primary">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Visit Us in Tribeca</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5 mt-1" />
                  <p>123 Greenwich Street<br />New York, NY 10007</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <p>(212) 555-0123</p>
                </div>
                <Button variant="outline" className="mt-4">
                  Get Directions
                </Button>
              </div>
            </div>
            <div className="flex-1 h-[400px] w-full bg-white rounded-lg shadow-md">
              {/* Map would go here - implement with Google Maps */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Revolution Eyes</h3>
              <p className="text-white/80">Providing exceptional eye care to the Tribeca community since 2008.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/80 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
                <li><a href="#eyewear" className="text-white/80 hover:text-white">Eyewear</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-white/80">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Revolution Eyes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
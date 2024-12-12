import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582142839970-2b9e04b60f65"
          alt="Eyewear collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Frames That Define You
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Curated eyewear for every style, purpose, and vision. Explore our collection of luxury, functional, and everyday frames.
        </p>
        <Button size="lg" variant="secondary">
          <Calendar className="mr-2" />
          Book a Fitting Appointment
        </Button>
      </div>
    </section>
  );
};
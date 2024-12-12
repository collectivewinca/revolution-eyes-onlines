import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Revolution Eyes</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#eyewear" className="nav-link">Eyewear</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Button className="bg-primary text-white hover:bg-primary/90">
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};
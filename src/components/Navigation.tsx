import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">Revolution Eyes</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <Link to="/explore" className="nav-link">Eyewear</Link>
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
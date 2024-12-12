import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navigation = () => {
  return (
    <nav className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">Revolution Eyes</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <HashLink smooth to="/#services" className="nav-link">Services</HashLink>
          <HashLink smooth to="/#about" className="nav-link">About</HashLink>
          <Link to="/explore" className="nav-link">Eyewear</Link>
          <HashLink smooth to="/#contact" className="nav-link">Contact</HashLink>
          <Button className="bg-primary text-white hover:bg-primary/90">
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FeaturedEyewear = () => {
  return (
    <section id="eyewear" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Eyewear</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium eyewear designed for every style and need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <img
              src="https://images.unsplash.com/photo-1577744486770-020ab432da65"
              alt="Designer Frames"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Designer Frames</h3>
            <p className="text-gray-600">
              Luxury eyewear from top fashion houses and designers.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
              alt="Prescription Sunglasses"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Prescription Sunglasses</h3>
            <p className="text-gray-600">
              Stylish protection with your perfect prescription.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <img
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371"
              alt="Sports Eyewear"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sports Eyewear</h3>
            <p className="text-gray-600">
              Performance frames for active lifestyles.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/explore">
            <Button size="lg" variant="outline">
              Explore Full Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Calendar, Eye } from "lucide-react";

interface EyewearItem {
  name: string;
  brand: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const FeaturedEyewear = () => {
  const eyewearItems: EyewearItem[] = [
    {
      name: "Aviator Classic",
      brand: "Ray-Ban",
      description: "Timeless aviator design with premium metal frame and anti-glare lenses.",
      price: "Starting at $199",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      category: "Luxury"
    },
    {
      name: "Modern Square",
      brand: "Oliver Peoples",
      description: "Lightweight titanium frame perfect for all-day comfort.",
      price: "Starting at $299",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      category: "Designer"
    },
    {
      name: "Blue Light Shield",
      brand: "Warby Parker",
      description: "Stylish frames with advanced blue light filtering technology.",
      price: "Starting at $149",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      category: "Blue Light"
    },
    {
      name: "Classic Round",
      brand: "Moscot",
      description: "Vintage-inspired round frames with modern comfort.",
      price: "Starting at $249",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Vintage"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Showcasing the Best in Style and Functionality
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium eyewear designed for every style and need. 
            From timeless classics to the latest trends, Revolution Eyes brings you frames that make a statement.
          </p>
        </div>

        <div className="mb-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {eyewearItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <span className="text-sm text-primary/60">{item.category}</span>
                        <h3 className="text-lg font-semibold mb-1">{item.brand}</h3>
                        <h4 className="text-primary mb-2">{item.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                        <p className="text-sm font-semibold text-primary mb-4">{item.price}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="w-4 h-4 mr-1" />
                            Try On
                          </Button>
                          <Button size="sm" className="flex-1">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg" variant="outline">
            Explore Full Collection
          </Button>
          <Button size="lg">
            <Calendar className="mr-2" />
            Book a Fitting
          </Button>
        </div>
      </div>
    </section>
  );
};
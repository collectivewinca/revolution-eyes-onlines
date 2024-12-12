import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Eye, Search, SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Frame {
  id: string;
  name: string;
  brand: string;
  price: string;
  category: string;
  style: string;
  frameType: string;
  material: string;
  purpose: string;
  image: string;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  isLimitedEdition?: boolean;
}

const frames: Frame[] = [
  {
    id: "1",
    name: "Classic Aviator",
    brand: "Ray-Ban",
    price: "$199",
    category: "Unisex",
    style: "Classic",
    frameType: "Full-rim",
    material: "Metal",
    purpose: "Sunglasses",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    isBestseller: true
  },
  {
    id: "2",
    name: "Modern Square",
    brand: "Oliver Peoples",
    price: "$299",
    category: "Men's",
    style: "Trendy",
    frameType: "Full-rim",
    material: "Acetate",
    purpose: "Prescription",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    isNewArrival: true
  },
  {
    id: "3",
    name: "Lightweight Titanium",
    brand: "Lindberg",
    price: "$499",
    category: "Unisex",
    style: "Minimalist",
    frameType: "Rimless",
    material: "Titanium",
    purpose: "Prescription",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    isLimitedEdition: true
  },
  {
    id: "4",
    name: "Blue Light Shield",
    brand: "Warby Parker",
    price: "$149",
    category: "Women's",
    style: "Trendy",
    frameType: "Half-rim",
    material: "Mixed",
    purpose: "Blue-light glasses",
    image: "https://images.unsplash.com/photo-1577744486770-020ab432da65",
  },
  // Add more frames as needed
];

const ExploreCollection = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    style: '',
    frameType: '',
    material: '',
    purpose: '',
  });

  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* Filter and Sort Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              
              {/* Filter Dropdowns */}
              <div className="flex gap-2">
                {Object.keys(selectedFilters).map((filter) => (
                  <DropdownMenu key={filter}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Option 2</DropdownMenuItem>
                      <DropdownMenuItem>Option 3</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Sort by: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy('featured')}>Featured</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price-low')}>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price-high')}>Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('newest')}>Newest</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frames.map((frame) => (
              <div 
                key={frame.id}
                className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={frame.image}
                    alt={frame.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {frame.isNewArrival && (
                    <span className="absolute top-2 left-2 bg-primary text-white px-2 py-1 text-sm rounded">New</span>
                  )}
                  {frame.isBestseller && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-sm rounded">Bestseller</span>
                  )}
                  {frame.isLimitedEdition && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">Limited Edition</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{frame.name}</h3>
                  <p className="text-gray-600 mb-2">{frame.brand}</p>
                  <p className="text-primary font-semibold mb-4">{frame.price}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      Try On
                    </Button>
                    <Button size="sm" className="flex-1">View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreCollection;
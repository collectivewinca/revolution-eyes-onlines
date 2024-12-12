import React, { useState } from 'react';
import { HeroSection } from '@/components/explore/HeroSection';
import { FilterSection } from '@/components/explore/FilterSection';
import { ProductGrid } from '@/components/explore/ProductGrid';

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
      <HeroSection />
      <FilterSection 
        selectedFilters={selectedFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ProductGrid frames={frames} />
    </div>
  );
};

export default ExploreCollection;

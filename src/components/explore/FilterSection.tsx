import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterSectionProps {
  selectedFilters: {
    category: string;
    style: string;
    frameType: string;
    material: string;
    purpose: string;
  };
  sortBy: string;
  setSortBy: (value: string) => void;
}

export const FilterSection = ({ selectedFilters, sortBy, setSortBy }: FilterSectionProps) => {
  return (
    <section className="py-8 border-b">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            
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
  );
};
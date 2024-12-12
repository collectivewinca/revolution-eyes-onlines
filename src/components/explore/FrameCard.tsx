import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface Frame {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  isLimitedEdition?: boolean;
}

export const FrameCard = ({ frame }: { frame: Frame }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
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
  );
};
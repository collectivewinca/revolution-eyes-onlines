import { FrameCard } from "./FrameCard";

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

interface ProductGridProps {
  frames: Frame[];
}

export const ProductGrid = ({ frames }: ProductGridProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {frames.map((frame) => (
            <FrameCard key={frame.id} frame={frame} />
          ))}
        </div>
      </div>
    </section>
  );
};
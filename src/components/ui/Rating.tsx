import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  max?: number;
  showValue?: boolean;
  className?: string;
}

export default function Rating({
  rating,
  max = 5,
  showValue = true,
  className,
}: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          size={16}
          className="fill-[#FF9017] text-[#FF9017]"
        />
      ))}

      {hasHalfStar && (
        <div className="relative">
          <Star size={16} className="text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star
              size={16}
              className="fill-[#FF9017] text-[#FF9017]"
            />
          </div>
        </div>
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          size={16}
          className="text-[#BDC4CD]"
        />
      ))}

      {showValue && (
        <span className="ml-1 text-sm text-[#FF9017]">
          {rating}
        </span>
      )}
    </div>
  );
}
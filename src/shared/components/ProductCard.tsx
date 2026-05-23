import Image from "next/image";
import { Heart } from "lucide-react";

import { Product } from '@/types/index'
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onWishlist?: () => void;
  isFavorite?: boolean;
}

export default function ProductCard(props: ProductCardProps) {
  const { product, onWishlist, isFavorite } = props;
  const rating = product.rating;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 w-full max-w-sm">

      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain mix-blend-multiply"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Divider */}
      <div className="-mx-4 border-t border-[#DEE2E7] mb-3"></div>

      {/* Price + Wishlist */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-sans font-semibold text-lg leading-none text-[#1C1C1C]">
            ${product.price}
          </span>
          {product.oldPrice != null && (
            <span className="font-sans font-normal text-base leading-none text-[#8B96A5] line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <button onClick={onWishlist} className="border border-[#DEE2E7] shadow-sm rounded-md p-2 hover:bg-gray-100">
          <Heart size={16} className={cn(
            "w-5 h-5",
            isFavorite ? "fill-blue-500 text-blue-500" : "text-[#0D6EFD]"
          )} />
        </button>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-sm mb-2">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500">★</span>
        ))}

        {/* Half Star */}
        {hasHalfStar && (
          <span className="relative inline-block">
            <span className="text-gray-300">★</span>
            <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-500">
              ★
            </span>
          </span>
        )}
        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}

        <span className="text-gray-500 ml-1">{rating}</span>
      </div>
      {/* Title */}
      <p className="font-sans font-normal text-base leading-6 tracking-[-0.2px] text-[#606060]">
        {product.name}
      </p>
    </div>
  );
}
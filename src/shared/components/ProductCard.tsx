import Image from "next/image";

import { Product } from '@/types/index'
import { FavoriteButton } from "@/features/products/components/FavoriteButton";
import Rating from "@/components/ui/Rating";

interface ProductCardProps {
  product: Product;
  isFavorite?: boolean;
}

export default function ProductCard(props: ProductCardProps) {
  const { product, isFavorite } = props;

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

        <FavoriteButton productId={product.id} initialFavorited={isFavorite} />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-sm mb-2">
        <Rating rating={product.rating} />
      </div>
      {/* Title */}
      <p className="font-sans font-normal text-base leading-6 tracking-[-0.2px] text-[#606060]">
        {product.name}
      </p>
    </div>
  );
}
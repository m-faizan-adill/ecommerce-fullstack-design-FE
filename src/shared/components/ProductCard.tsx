import Image from "next/image";
import { Product } from '@/types/index'
import { FavoriteButton } from "@/features/products/components/FavoriteButton";
import Rating from "@/components/ui/Rating";

interface ProductCardProps {
  product: Product;
  isFavorite?: boolean;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, isFavorite, viewMode = 'grid' }: ProductCardProps) {

  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 w-full flex flex-col sm:flex-row gap-5 items-center sm:items-start relative transition-all">

        {/* Absolute Wishlist Button (Top Right Corner) */}
        <div className="absolute top-4 right-4 z-10">
          <FavoriteButton productId={product.id} initialFavorited={isFavorite} />
        </div>

        {/* Image Container */}
        <div className="relative w-full sm:w-52 h-44 shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain mix-blend-multiply"
            sizes="(max-width: 640px) 100vw, 220px"
          />
        </div>

        {/* Content Box */}
        <div className="flex-1 flex flex-col w-full pt-1 pr-12">

          {/* Title */}
          <h4 className="font-sans font-medium text-base text-[#1C1C1C] hover:text-[#0D6EFD] cursor-pointer mb-2 max-w-xl">
            {product.name}
          </h4>

          {/* Price Row */}
          <div className="flex items-baseline gap-2 mb-1.5">
            <span className="font-sans font-semibold text-xl text-[#1C1C1C]">
              ${product.price}
            </span>
            {product.oldPrice != null && (
              <span className="font-sans font-normal text-base text-[#8B96A5] line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          {/* Rating + Orders + Shipping Badge */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#8B96A5] mb-3">
            <Rating rating={product.rating} showValue={false} />
            <span className="text-[#FF9017] font-medium">{product.rating}</span>
            <span className="text-gray-300">•</span>
            <span>154 orders</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#00B517] font-medium">Free Shipping</span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#505050] font-sans font-normal leading-relaxed mb-4 max-w-2xl line-clamp-2">
            {product.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>

          {/* Details Link */}
          <button className="text-[#0D6EFD] hover:underline font-medium text-sm text-left w-max">
            View details
          </button>
        </div>

      </div>
    );
  }


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
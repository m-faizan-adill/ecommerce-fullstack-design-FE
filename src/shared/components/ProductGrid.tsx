'use client';
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "./ProductCard";

import { Product } from '@/types/index'
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  viewMode?: 'grid' | 'list';
}

export default function ProductGrid({ products, viewMode }: ProductGridProps) {
  return (
    <div className={cn(
      viewMode === 'list' ? 'flex flex-col gap-4' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
    )}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewMode={viewMode} />
      ))}
    </div>
  );
}


interface ProductGridSkeletonProps {
  count?: number;
  columns?: 2 | 3 | 4;
}

const COLUMN_CLASSES: Record<NonNullable<ProductGridSkeletonProps["columns"]>, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

function CardSkeleton() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] rounded-2xl border border-gray-100 overflow-hidden">
      {/* Image */}
      <Skeleton className="aspect-square w-full rounded-none" />

      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        {/* Price + favorite button */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>

        {/* Stars */}
        <Skeleton className="h-3.5 w-24" />

        {/* Product name */}
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-3/4" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6, columns = 3 }: ProductGridSkeletonProps) {
  return (
    <div
      aria-busy="true"
      aria-label="Loading products"
      className={`grid ${COLUMN_CLASSES[columns]} gap-4 lg:gap-6`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
'use client';

import { useState } from "react";
import ProductToolbar from "./ProductToolbar";
import ProductGrid from "@/shared/components/ProductGrid";
import { Product } from "@/types/index";

interface ProductListContainerProps {
  products: Product[];
}

export default function ProductListContainer({ products }: ProductListContainerProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="lg:col-span-3 flex flex-col gap-4">
      <ProductToolbar
        total={12911}
        viewMode={viewMode}
        onViewChange={setViewMode}
      />

      <ProductGrid products={products} viewMode={viewMode} />
    </div>
  );
}
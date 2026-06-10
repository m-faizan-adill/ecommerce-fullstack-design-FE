import Image from "next/image";
import { recommendedProducts } from "@/lib/data";

export default function RecommendedSection() {
  return (
    <section className="py-4">
      <h2 className="font-semibold text-lg lg:text-2xl text-[#1C1C1C] mb-5 tracking-tight">
        Recommended items
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {recommendedProducts.map((product) => (
          <a
            key={product.id}
            href="#"
            className="bg-[#FFFFFF] border border-gray-200 rounded p-3 hover:shadow-md transition-shadow group"
          >
            <div className="relative w-full h-36 mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-gray-800 text-sm">${product.price.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

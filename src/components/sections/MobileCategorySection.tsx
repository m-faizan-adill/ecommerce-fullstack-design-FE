import Image from "next/image";

interface CategoryItem {
  name: string;
  price: number;
  image: string;
}

interface MobileCategorySectionProps {
  title: string;
  items: CategoryItem[];
}

export default function MobileCategorySection({ title, items }: MobileCategorySectionProps) {
  return (
    <section className="px-4 py-3">
      <h2 className="font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {items.map((item, i) => (
          <a key={i} href="#" className="shrink-0 w-28 text-center">
            <div className="relative w-full h-20 mb-1 bg-gray-50 rounded overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
            </div>
            <p className="text-xs text-gray-700 line-clamp-2">{item.name}</p>
            <p className="text-xs text-gray-400">From USD {item.price}</p>
          </a>
        ))}
      </div>
      <a href="#" className="text-sm text-blue-600 flex items-center gap-1 mt-1">
        Source now →
      </a>
    </section>
  );
}

import Image from "next/image";

interface CategoryItem {
  name: string;
  price: number;
  image: string;
}

interface CategorySectionProps {
  title: string;
  bannerImage: string;
  bannerLabel: string;
  items: CategoryItem[];
  cols?: number;
}

export default function CategorySection({
  title,
  bannerImage,
  bannerLabel,
  items,
  cols = 4,
}: CategorySectionProps) {
  return (
    <section className="px-4 lg:px-6 py-2">
      <div className="bg-white border border-gray-200 rounded p-4">
        <div className={`grid gap-3`} style={{ gridTemplateColumns: `200px repeat(${cols}, 1fr)` }}>
          {/* Banner */}
          <div className="relative rounded overflow-hidden min-h-45">
            <Image src={bannerImage} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h2 className="font-bold text-white text-lg">{title}</h2>
              <a href="#" className="mt-2 inline-block bg-white text-gray-800 text-xs px-3 py-1 rounded hover:bg-gray-100">
                Source now
              </a>
            </div>
          </div>

          {/* Items grid */}
          {items.map((item, i) => (
            <a key={i} href="#" className="group text-center p-2 border border-gray-100 rounded hover:shadow-sm transition-shadow">
              <div className="relative w-full h-20 mb-2">
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>
              <p className="text-xs text-gray-700 line-clamp-2">{item.name}</p>
              <p className="text-xs text-gray-400 mt-1">From USD {item.price}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

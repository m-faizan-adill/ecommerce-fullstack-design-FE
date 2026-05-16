import Image from "next/image";

interface CategoryItem {
  name: string;
  price: number;
  image: string;
}

interface CategorySectionProps {
  title: string;
  bannerImage: string;
  items: CategoryItem[];
  cols?: number;
}

export default function CategorySection({
  bannerImage,
  items,
  cols = 4,
  title = "Home and outdoor",
}: CategorySectionProps) {
  const row1 = items.slice(0, cols);
  const row2 = items.slice(cols, cols * 2);

  return (
    <section className="lg:px-6 pb-6">
      <div className="bg-white md:border border-gray-200 rounded">

        <div className="hidden md:grid rounded overflow-hidden"
          style={{
            gridTemplateColumns: `250px repeat(${cols}, 1fr)`,
            gridTemplateRows: "auto auto",
          }}
        >
          {/* Banner — spans both rows */}
          <div className="row-span-2 relative min-h-44">
            <Image src={bannerImage} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-start p-4">
              <h2 className="font-bold text-white text-lg leading-snug">{title}</h2>
              <a
                href="#"
                className="mt-2 inline-block bg-white text-gray-800 text-xs px-3 py-1 rounded hover:bg-gray-100 w-fit"
              >
                Source now
              </a>
            </div>
          </div>

          {/* Row 1 items */}
          {row1.map((item, i) => (
            <div className="border border-gray-200">
              <a
                key={`r1-${i}`}
                href="#"
                className="flex flex-col justify-between p-3 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">From</p>
                  <p className="text-xs text-gray-500">USD {item.price}</p>
                </div>
                <div className="relative w-full h-16 mt-2">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
              </a>
            </div>
          ))}

          {/* Row 2 items */}
          {row2.map((item, i) => (
            <a
              key={`r2-${i}`}
              href="#"
              className="flex flex-col justify-between border border-gray-200 p-3 bg-white hover:bg-gray-50 transition-colors"
              style={{ gridColumnStart: i + 2 }}
            >
              <div>
                <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-tight">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">From</p>
                <p className="text-xs text-gray-500">USD {item.price}</p>
              </div>
              <div className="relative w-full h-16 mt-2">
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>
            </a>
          ))}
        </div>

        {/* ── MOBILE (below md) ── */}
        <div className="md:hidden py-3 border-b border-gray-200">
          <h2 className="font-bold text-gray-900 text-base mb-3 pl-5 md:pl-0">{title}</h2>

          {/* Horizontal scroll row */}
          <div className="flex overflow-x-auto scrollbar-hide divide-x divide-gray-200 border border-gray-200 md:rounded">
            {items.map((item, i) => (
              <a
                key={i}
                href="#"
                className="shrink-0 w-36 p-3 flex flex-col items-start md:bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="relative w-full h-24 mb-2">
                  <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply" />
                </div>
                <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-tight w-full">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">From USD {item.price}</p>
              </a>
            ))}
          </div>

          {/* Source now link */}
          <a
            href="#"
            className="inline-flex items-center gap-1 mt-3 pl-5 md:pl-0 text-sm text-blue-600 font-medium hover:underline"
          >
            Source now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
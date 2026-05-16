import { categories } from "@/lib/data";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="lg:px-6 lg:pt-6">
      <div className="flex items-stretch gap-3 bg-white lg:border lg:border-gray-200 lg:rounded lg:p-4">

        {/* Category sidebar - desktop only */}
        <aside className="hidden lg:block w-48 shrink-0 bg-white">
          <ul>
            {categories.map((cat, i) => (
              <li key={cat}>
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-sm ${i === 0 ? "bg-blue-50 text-gray-900" : ""
                    }`}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Hero banner */}
        <div className="flex-1 relative lg:rounded overflow-hidden bg-teal-100 min-h-45 lg:min-h-60">
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 lg:px-10 z-10">
              <p className="text-gray-600 text-sm">Latest trending</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Electronic items
              </h1>
              <a
                href="#"
                className="inline-block bg-white text-gray-700 text-sm px-4 py-1.5 rounded"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 lg:w-3/5">
            <Image
              src="/assets/Image/backgrounds/Banner-board-800x420 2.png"
              alt="Electronic items"
              fill
              className="object-cover object-left"
            />
          </div>
        </div>

        {/* Right cards - desktop only */}
        <div className="hidden lg:flex flex-col gap-2 w-44 shrink-0">
          <div className="bg-blue-100 rounded p-3 flex flex-col gap-2">
            <p className="text-sm text-gray-600">
              Hi, user<br />
              <span className="font-medium">let&apos;s get started</span>
            </p>
            <button className="w-full bg-blue-600 text-white text-xs py-1.5 rounded hover:bg-blue-700">
              Join now
            </button>
            <button className="w-full bg-white border border-gray-300 text-blue-600 text-xs py-1.5 rounded hover:bg-gray-50">
              Log in
            </button>
          </div>
          <div className="bg-orange-400 text-white rounded p-3 text-xs">
            Get US $10 off with a new supplier
          </div>
          <div className="bg-teal-500 text-white rounded p-3 text-xs">
            Send quotes with supplier preferences
          </div>
        </div>
      </div>
    </div>
  );
}

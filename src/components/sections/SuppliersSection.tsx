import Image from "next/image";
import { supplierRegions } from "@/lib/data";

export default function SuppliersSection() {
  return (
    <section className="px-4 lg:px-6 py-4">
      <div className="bg-white border border-gray-200 rounded p-4">
        <h2 className="font-semibold text-gray-800 mb-4">Suppliers by region</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {supplierRegions.map((supplier, i) => (
            <a key={i} href="#" className="flex items-center gap-2 hover:text-blue-600 group">
              <div className="relative w-6 h-4 shrink-0">
                <Image src={supplier.flag} alt={supplier.country} fill className="object-cover rounded-sm" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-700 group-hover:text-blue-600">{supplier.country}</p>
                <p className="text-xs text-gray-400">{supplier.site}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

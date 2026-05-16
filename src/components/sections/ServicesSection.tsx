import Image from "next/image";

const services = [
  { label: "Source from Industry Hubs", image: "/assets/Image/backgrounds/Group 969.png", icon: "🔍" },
  { label: "Customize Your Products", image: "/assets/Image/backgrounds/image 98.png", icon: "📋" },
  { label: "Fast, reliable shipping by ocean or air", image: "/assets/Image/backgrounds/image 106.png", icon: "✈" },
  { label: "Product monitoring and inspection", image: "/assets/Image/backgrounds/image 107.png", icon: "🌐" },
];

export default function ServicesSection() {
  return (
    <section className="px-4 lg:px-6 py-4">
      <h2 className="font-semibold text-gray-800 mb-4">Our extra services</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((service) => (
          <div key={service.label} className="relative rounded overflow-hidden h-36 group cursor-pointer">
            <Image src={service.image} alt={service.label} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-2 text-sm">
                {service.icon}
              </div>
              <p className="text-xs font-medium leading-tight">{service.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

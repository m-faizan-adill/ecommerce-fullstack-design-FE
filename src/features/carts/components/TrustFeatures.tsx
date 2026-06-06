export default function TrustFeatures() {
  const features = [
    { icon: "🛡️", title: "Secure payment", desc: "Have you ever finally just" },
    { icon: "💬", title: "Customer support", desc: "Have you ever finally just" },
    { icon: "🚚", title: "Free delivery", desc: "Have you ever finally just" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3.5">
          <div className="size-12 bg-[#DEE2E7] flex items-center justify-center w-12 h-12 rounded-full text-xl shrink-0">
            {feature.icon}
          </div>
          <div className="flex flex-col">
            <h4 className="w-46 h-6 text-base font-normal leading-6 tracking-[-0.2px] text-[#1C1C1C]">{feature.title}</h4>
            <p className="text-base font-normal leading-6 tracking-[-0.2px] text-[#A9ACB0]">{feature.desc}</p>          </div>
        </div>
      ))}
    </div>
  );
}
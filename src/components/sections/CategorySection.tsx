import Image from "next/image";
import { Button } from "../ui";
import Link from "next/link";
import { ArrowIcon } from "@/assets";

interface CategoryItem {
  name: string;
  price: number;
  image: string;
}

interface CategorySectionProps {
  title: string;
  bannerImage: string;
  items: CategoryItem[];
}

export default function CategorySection({
  bannerImage,
  items,
  title = "Home and outdoor",
}: CategorySectionProps) {


  return (
    <section className="py-4 lg:px-8">

      <div className="flex border border-[#DEE2E7] rounded overflow-x-clip">

        {/* Left promo card - hidden on mobile */}
        <div className="hidden lg:flex flex-col justify-between w-65 h-67 shrink-0 bg-[#EEF1FD] p-4 relative group overflow-hidden cursor-pointer">
          {/* Background image - full cover */}
          <Image
            src={bannerImage || "/assets/Image/backgrounds/image 98.png"}
            alt="Electronics"
            fill
            className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-5" />

          <div className="z-10 space-y-2">
            <h2 className="text-[20px] font-bold text-[#1C1C1C] leading-tight transition-transform duration-300 group-hover:-translate-y-0.5">{title}</h2>

            <Button
              variant="outline"
              size="sm"
              className="bg-white border-[#FFFFFF] text-[#1C1C1C] hover:bg-[#0D6EFD] hover:text-white hover:border-[#0D6EFD] transition-all duration-200"
            >
              Source now
            </Button>
          </div>
        </div>

        <div className="flex flex-col bg-[#FFFFFF] min-w-0 flex-1">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 lg:overflow-visible flex-1 w-full scrollbar-hide">            {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 border border-[#E0E0E0] min-w-36 lg:min-w-0 lg:flex-row lg:items-start lg:justify-between cursor-pointer group/item transition-colors duration-200 hover:bg-[#F5F8FF] hover:border-[#0D6EFD]"
            >
              {/* Image - top on mobile, right on desktop */}
              <div className="relative h-20 w-20 lg:h-14 lg:w-14 shrink-0 lg:self-end lg:order-2 transition-transform duration-300 group-hover/item:scale-110">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>

              {/* Text - bottom on mobile, left on desktop */}
              <div className="mt-2 text-center lg:text-left lg:mt-0 lg:order-1">
                <p className="font-normal lg:text-base text-sm leading-[100%] tracking-normal text-[#1C1C1C]">{item.name}</p>
                <div className="text-[#8B96A5] lg:text-sm text-xs flex md:flex-col md:space-x-0 flex-row space-x-1 mt-2 font-normal  leading-[100%] tracking-normal">
                  <p>From</p>
                  <p>USD {item.price}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className="flex flex-row items-center justify-start gap-1 py-3 pl-5 lg:hidden text-[#0D6EFD] font-medium group/link w-fit">
            <Link href={'/'} className="text-sm hover:underline transition-all duration-200">
              Source now
            </Link>
            <ArrowIcon direction="right"
              className="size-3 transition-transform duration-200 group-hover/link:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
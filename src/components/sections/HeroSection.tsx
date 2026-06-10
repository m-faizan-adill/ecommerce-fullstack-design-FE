'use client';

import { categories } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="lg:px-6 lg:pt-6">
      <div className="flex items-stretch gap-3 bg-[#FFFFFF] lg:border lg:border-gray-200 lg:rounded lg:p-4">

        {/* Category sidebar - desktop only */}
        <aside className="hidden lg:block w-50 shrink-0">
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
        <div className="flex-1 relative lg:rounded overflow-hidden w-166 h-93.25 min-h-50 lg:min-h-60">
          <Image
            src="/assets/Image/backgrounds/Banner-board-800x420 2.png"
            alt="Electronic items"
            fill
            className="object-cover object-center"
          />

          {/* Content - top left */}
          <div className="absolute top-0 left-0 pl-11 pt-12 z-10 flex flex-col gap-2">
            <p className="font-normal text-[28px] leading-[100%] tracking-[0%] text-[#1C1C1C]">
              Latest trending
            </p>

            <h1 className="font-bold text-[32px] leading-[100%] tracking-[0%] text-[#1C1C1C]">
              Electronic items
            </h1>

            <Button
              variant="outline"
              size="md"
              className="bg-[#FFFFFF] border border-[#FFFFFF] shadow-[0px_1px_2px_0px_#38383814] text-[#1C1C1C] w-29.75 h-10 rounded-md px-4 gap-2.5 opacity-100"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Right cards - desktop only */}
        <div className="hidden lg:flex flex-col gap-2 w-44 shrink-0">
          <div className="bg-blue-100 rounded p-3 flex flex-col gap-2">
      
            <div className="flex items-center gap-2">
              <div className="h-11 w-11 rounded-full bg-[#E3F0FF]" />
              <div>
                <p>Hi, user</p>
                <p>let's get started</p>
              </div>
            </div>
            <Link href="/register">
              <Button
                variant="filled"
                size="sm"
                block
              >
                Join now
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                block
              >
                Log in
              </Button>
            </Link>
          </div>
          <div className="bg-[#F38332] text-[#FFFFFF] rounded p-3 text-xs">
            Get US $10 off with a new supplier
          </div>
          <div className="bg-[#55BDC3] text-[#FFFFFF] rounded p-3 text-xs">
            Send quotes with supplier preferences
          </div>
        </div>
      </div>
    </div>
  );
}

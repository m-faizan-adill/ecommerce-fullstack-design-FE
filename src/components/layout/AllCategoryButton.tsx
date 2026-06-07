import Link from "next/link";
import { HamburgerIcon } from "@/assets";

export function AllCategoryButton() {
  return (
    <Link
      href="/categories"
      className="flex items-center gap-2.5 text-sm font-medium text-gray-800 hover:text-black transition-colors whitespace-nowrap"
      aria-label="Browse all categories"
    >
      <HamburgerIcon className="text-gray-700" />
      <span>All category</span>
    </Link>
  );
}
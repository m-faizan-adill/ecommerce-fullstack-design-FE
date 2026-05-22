import { AllCategoryButton } from "./AllCategoryButton";
import { NavLinks } from "./NavLinks";
import { LocaleSelector } from "./LocaleSelector";
import { ShipToSelector } from "./ShipToSelector";


export function SecondaryHeader() {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex h-11 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ── Left: All-category trigger + nav links ── */}
        <div className="flex items-center gap-1">
          <AllCategoryButton /> v

          {/* Vertical divider */}
          <span className="mx-3 h-4 w-px bg-gray-200" aria-hidden="true" />

          {/* Hidden on small screens — expose a mobile drawer separately */}
          <div className="hidden md:block">
            <NavLinks />
          </div>
        </div>

        {/* ── Right: locale + shipping selectors ── */}
        <div className="flex items-center gap-0.5">
          <LocaleSelector />

          {/* Vertical divider */}
          <span className="mx-1 h-4 w-px bg-gray-200" aria-hidden="true" />

          <ShipToSelector />
        </div>

      </div>
    </div>
  );
}
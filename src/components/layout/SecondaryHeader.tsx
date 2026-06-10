import { AllCategoryButton } from "./AllCategoryButton";
import { NavLinks } from "./NavLinks";
import { LocaleSelector } from "./LocaleSelector";
import { ShipToSelector } from "./ShipToSelector";
import { Container } from "../ui";


export function SecondaryHeader() {
  return (
    <div className="w-full border-b border-gray-200 bg-[#FFFFFF]">
      <Container className="flex h-11 items-center justify-between">
        {/* ── Left: All-category trigger + nav links ── */}
        <div className="flex items-center gap-1">
          <AllCategoryButton />

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
      </Container>
    </div>
  );
}
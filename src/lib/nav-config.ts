import type { NavItem, LocaleOption, ShippingDestination } from "@/types/nav";

export const NAV_ITEMS: NavItem[] = [
  { label: "Hot offers", href: "/hot-offers" },
  { label: "Gift boxes", href: "/gift-boxes" },
  { label: "Projects", href: "/projects" },
  { label: "Menu item", href: "/menu-item" },
  {
    label: "Help",
    href: "/help",
    hasDropdown: true,
    children: [
      { label: "FAQ", href: "/help/faq", description: "Frequently asked questions" },
      { label: "Contact us", href: "/help/contact", description: "Get in touch with our team" },
      { label: "Shipping info", href: "/help/shipping", description: "Delivery times and costs" },
      { label: "Returns", href: "/help/returns", description: "Return policy and process" },
    ],
  },
];

export const LOCALE_OPTIONS: LocaleOption[] = [
  { label: "English, USD", value: "en-US", currency: "USD" },
  { label: "English, EUR", value: "en-EU", currency: "EUR" },
  { label: "Deutsch, EUR", value: "de-DE", currency: "EUR" },
  { label: "Français, EUR", value: "fr-FR", currency: "EUR" },
];
 
export const SHIPPING_DESTINATIONS: ShippingDestination[] = [
  { label: "Germany",        countryCode: "DE" },
  { label: "United States",  countryCode: "US" },
  { label: "United Kingdom", countryCode: "GB" },
  { label: "France",         countryCode: "FR" },
  { label: "Netherlands",    countryCode: "NL" },
];
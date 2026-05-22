export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavDropdownItem[];
}

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface LocaleOption {
  label: string;
  value: string;
  currency: string;
}

export interface ShippingDestination {
  label: string;
  countryCode: string;    // ISO 3166-1 alpha-2
}
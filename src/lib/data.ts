import { Product } from "@/types";

export const categories = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];

export const navLinks = [
  { label: "Hot offers", href: "#" },
  { label: "Gift boxes", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Menu item", href: "#" },
  { label: "Help", href: "#" },
];

export const products: Product[] = [
  { id: "P-1001", name: "Canon EOS 2000 — 10x zoom", price: 998, image: "/assets/Image/tech/image 23.png", description: "High performance camera with 10x zoom", category: "Cameras", stock: 42, rating: 4.5 },
  { id: "P-1002", name: "GoPro HERO6 4K Action Camera", price: 499, image: "/assets/Image/tech/6.png", description: "4K action camera for adventures", category: "Cameras", stock: 12, rating: 2.5 },
  { id: "P-1003", name: "Wireless gaming headset", price: 89, image: "/assets/Image/tech/image 29.png", description: "High quality wireless gaming headset", category: "Audio", stock: 230, rating: 1.5 },
  { id: "P-1004", name: "Smartwatch Pro — silver", price: 199, image: "/assets/Image/tech/8.png", description: "Premium smartwatch in silver", category: "Wearables", stock: 0, rating: 4.5 },
  { id: "P-1005", name: 'MacBook Pro 14" M3', price: 1999, image: "/assets/Image/tech/image 34.png", description: "Latest MacBook Pro with M3 chip", category: "Laptops", stock: 8, rating: 4.5 },
  { id: "P-1006", name: "iPhone 15 Pro — 256GB", price: 1099, image: "/assets/Image/tech/image 32.png", description: "Latest iPhone with 256GB storage", category: "Smartphones", stock: 56, rating: 3 },
  { id: "P-1007", name: "Leather travel wallet", price: 34, image: "/assets/Layout/alibaba/Image/cloth/image 24.png", description: "Premium leather travel wallet", category: "Accessories", stock: 480, rating: 2 },
  { id: "P-1008", name: "Electric kettle 1.2L", price: 39, image: "/assets/Image/tech/image 85.png", description: "Fast boiling electric kettle", category: "Home", stock: 0, rating: 4.5 },
  { id: "P-1009", name: "T-shirts with multiple colors", price: 10.30, image: "/assets/Layout/alibaba/Image/cloth/2 1.png", description: "Cotton t-shirt for men", category: "Clothes", stock: 120, rating: 5 },
  { id: "P-1010", name: "Jeans shorts for men blue color", price: 10.30, image: "/assets/Layout/alibaba/Image/cloth/Bitmap.png", description: "Slim fit jeans shorts", category: "Clothes", stock: 80, rating: 3.5 },
  { id: "P-1011", name: "Brown winter coat medium size", price: 12.50, image: "/assets/Layout/alibaba/Image/cloth/Bitmap (2).png", description: "Warm winter coat", category: "Clothes", stock: 45, rating: 3 },
  { id: "P-1012", name: "Jeans bag for travel for men", price: 34.00, image: "/assets/Layout/alibaba/Image/cloth/image 24.png", description: "Durable travel bag", category: "Accessories", stock: 60, rating: 4 },
];

export const dealProducts = products.slice(0, 5);
export const recommendedProducts = products.slice(4);

export const homeOutdoorProducts = [
  { name: "Soft chairs", price: 19, image: "/assets/Layout/alibaba/Image/interior/image 90.png" },
  { name: "Sofa & chair", price: 19, image: "/assets/Layout/alibaba/Image/interior/image 90.png" },
  { name: "Kitchen dishes", price: 19, image: "/assets/Layout/alibaba/Image/interior/image 90.png" },
  { name: "Smart watches", price: 19, image: "/assets/Image/tech/image 85.png" },
  { name: "Kitchen mixer", price: 100, image: "/assets/Layout/alibaba/Image/interior/image 90.png" },
  { name: "Blenders", price: 39, image: "/assets/Layout/alibaba/Image/interior/image 90.png" },
  { name: "Home appliance", price: 19, image: "/assets/Layout/alibaba/Image/interior/image 90.png" },
  { name: "Coffee maker", price: 10, image: "/assets/Layout/alibaba/Image/interior/image 90.png" },
];

export const electronicsProducts = [
  { name: "Smart watches", price: 19, image: "/assets/Image/tech/image 33.png" },
  { name: "Cameras", price: 89, image: "/assets/Image/tech/image 23.png" },
  { name: "Headphones", price: 70, image: "/assets/Image/tech/image 32.png" },
  { name: "Smart watches", price: 90, image: "/assets/Image/tech/image 33.png" },
  { name: "Gaming set", price: 35, image: "/assets/Image/tech/image 34.png" },
  { name: "Laptops & PC", price: 340, image: "/assets/Image/tech/image 29.png" },
  { name: "Smartphones", price: 19, image: "/assets/Image/tech/image 85.png" },
  { name: "Electric kettle", price: 240, image: "/assets/Image/tech/6.png" },
];

export const supplierRegions = [
  { country: "Arabic Emirates", flag: "/assets/Layout1/Image/flags/AE@2x.png", site: "@shopname.ae" },
  { country: "Australia", flag: "/assets/Layout1/Image/flags/GB@2x.png", site: "@shopname.au" },
  { country: "United States", flag: "/assets/Layout1/Image/flags/US@2x.png", site: "@shopname.us" },
  { country: "Russia", flag: "/assets/Layout1/Image/flags/RU@2x.png", site: "@shopname.ru" },
  { country: "Italy", flag: "/assets/Layout1/Image/flags/IT@2x.png", site: "@shopname.it" },
  { country: "France", flag: "/assets/Layout1/Image/flags/FR@2x.png", site: "@shopname.fr" },
  { country: "Arabic Emirates", flag: "/assets/Layout1/Image/flags/AE@2x.png", site: "@shopname.ae" },
  { country: "China", flag: "/assets/Layout1/Image/flags/CN@2x.png", site: "@shopname.cn" },
  { country: "Great Britain", flag: "/assets/Layout1/Image/flags/GB@2x.png", site: "@shopname.co.uk" },
];

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  { id: "P-1001", name: "Canon EOS 2000 — 10x zoom", price: 998, image: "/assets/Image/tech/image 23.png", description: "High performance camera with 10x zoom", category: "Cameras", stock: 42 },
  { id: "P-1002", name: "GoPro HERO6 4K Action Camera", price: 499, image: "/assets/Image/tech/image 29.png", description: "4K action camera for adventures", category: "Cameras", stock: 12 },
  { id: "P-1003", name: "Wireless gaming headset", price: 89, image: "/assets/Image/tech/image 32.png", description: "High quality wireless gaming headset", category: "Audio", stock: 230 },
  { id: "P-1004", name: "Smartwatch Pro — silver", price: 199, image: "/assets/Image/tech/image 33.png", description: "Premium smartwatch in silver", category: "Wearables", stock: 0 },
  { id: "P-1005", name: 'MacBook Pro 14" M3', price: 1999, image: "/assets/Image/tech/image 34.png", description: "Latest MacBook Pro with M3 chip", category: "Laptops", stock: 8 },
  { id: "P-1006", name: "iPhone 15 Pro — 256GB", price: 1099, image: "/assets/Image/tech/image 85.png", description: "Latest iPhone with 256GB storage", category: "Smartphones", stock: 56 },
  { id: "P-1007", name: "Leather travel wallet", price: 34, image: "/assets/Image/tech/image 86.png", description: "Premium leather travel wallet", category: "Accessories", stock: 480 },
  { id: "P-1008", name: "Electric kettle 1.2L", price: 39, image: "/assets/Image/tech/6.png", description: "Fast boiling electric kettle", category: "Home", stock: 0 },
];
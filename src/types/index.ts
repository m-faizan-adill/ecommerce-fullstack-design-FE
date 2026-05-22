export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
  oldPrice?: number;
  freeShip?: boolean;
  rating: number; // 0 to 5
}

export interface Category {
  name: string;
  href: string;
}

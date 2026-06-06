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

export interface CartItem {
  id: string;
  name: string;
  size: string;
  color: string;
  material: string;
  seller: string;
  price: number; 
  qty: string;
  image: string;
}

export interface Category {
  name: string;
  href: string;
}

import { products } from "@/lib/data";

export async function getProducts() {
  return products;
}

export async function getSingleProduct(id: string) {
  return products.find((product) => product.id === id);
}
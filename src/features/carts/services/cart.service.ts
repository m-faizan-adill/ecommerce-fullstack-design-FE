import { carts } from "@/lib/data";

export async function getCarts() {
  return carts;
}

export async function getSingleCart(id: string) {
  return carts.find((cart) => cart.id === id);
}
import { PRODUCTS, type Product } from "../data/products";

export function getAllProducts(): Product[] {
  return PRODUCTS.filter(p => p.isActive);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find(p => p.id === id);
}

export function getCategories(): string[] {
  return Array.from(new Set(getAllProducts().map(p => p.category))).sort();
}

export function getBrands(): string[] {
  return Array.from(new Set(getAllProducts().map(p => p.brand))).sort();
}

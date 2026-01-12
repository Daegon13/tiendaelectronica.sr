export type CartItem = { productId: string; qty: number };
export type Cart = { items: CartItem[] };

const KEY = "tesr_cart_v1";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
}

export function getCart(): Cart {
  if (typeof window === "undefined") return { items: [] };
  return safeParse<Cart>(localStorage.getItem(KEY), { items: [] });
}

export function saveCart(cart: Cart) {
  localStorage.setItem(KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent("cart:updated"));
}

export function clearCart() {
  saveCart({ items: [] });
}

export function addItem(productId: string, qty: number) {
  const cart = getCart();
  const found = cart.items.find(i => i.productId === productId);
  if (found) found.qty += qty;
  else cart.items.push({ productId, qty });
  saveCart(cart);
}

export function updateQty(productId: string, qty: number) {
  const cart = getCart();
  const item = cart.items.find(i => i.productId === productId);
  if (!item) return;
  item.qty = qty;
  if (item.qty <= 0) cart.items = cart.items.filter(i => i.productId !== productId);
  saveCart(cart);
}

export function removeItem(productId: string) {
  const cart = getCart();
  cart.items = cart.items.filter(i => i.productId !== productId);
  saveCart(cart);
}

export function getCartCount(): number {
  const cart = getCart();
  return cart.items.reduce((acc, i) => acc + i.qty, 0);
}

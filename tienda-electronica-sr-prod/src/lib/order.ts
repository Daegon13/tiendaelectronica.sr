export type Order = {
  orderNumber: string;
  createdAt: string;
  customer: { fullName: string; email: string; phone: string };
  fulfillment: {
    method: "shipping" | "pickup";
    shippingCost: number;
    address?: { street: string; number: string; city: string; neighborhood?: string; notes?: string };
  };
  items: Array<{ productId: string; name: string; unitPrice: number; qty: number; currency: "UYU" | "USD" }>;
  totals: { subtotal: number; shipping: number; total: number; currency: "UYU" | "USD" };
  payment: { method: "card"; status: "approved" | "rejected" | "pending" };
};

const KEY_LAST = "tesr_last_order_v1";

export function generateOrderNumber() {
  const part = Math.random().toString(36).slice(2, 8).toUpperCase();
  const ts = Date.now().toString().slice(-6);
  return `TESR-${ts}-${part}`;
}

export function saveLastOrder(order: Order) {
  localStorage.setItem(KEY_LAST, JSON.stringify(order));
}

export function getLastOrder(): Order | null {
  const raw = localStorage.getItem(KEY_LAST);
  if (!raw) return null;
  try { return JSON.parse(raw) as Order; } catch { return null; }
}

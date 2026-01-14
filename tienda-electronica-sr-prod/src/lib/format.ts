export function formatMoney(value: number, currency: "UYU" | "USD") {
  try {
    const locale = currency === "UYU" ? "es-UY" : "en-US";
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
  } catch {
    return `${currency} ${value.toFixed(0)}`;
  }
}

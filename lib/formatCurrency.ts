export function formatCurrency(
  amount: number,
  locale: string = "en-US",
  currency: string = "NGN"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

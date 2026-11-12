export function formatPrice(value: number, locale: string): string {
  return new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US', {
<<<<<<< HEAD
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
=======
    style: 'currency', currency: 'USD', maximumFractionDigits: 2,
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
  }).format(value);
}

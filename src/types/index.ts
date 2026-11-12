<<<<<<< HEAD
export interface ProductRating {
  rate: number;
  count: number;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}
export interface CartItem {
  product: Product;
  quantity: number;
}
=======
export interface ProductRating { rate: number; count: number; }
export interface Product {
  id: number; title: string; price: number; description: string; category: string; image: string; rating: ProductRating;
}
export interface CartItem { product: Product; quantity: number; }
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
export { ProductSort } from './enums/ProductSort';
export type Locale = 'fa' | 'en';

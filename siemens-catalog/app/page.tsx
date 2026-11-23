import type { Metadata } from 'next';
import { getAllProducts } from '@/data';
import ProductsBrowser from '@/components/ProductsBrowser';

export const metadata: Metadata = {
  title: 'همه محصولات | فارمان گستر',
  description: 'لیست کامل تجهیزات اتوماسیون صنعتی و قطعات زیمنس',
};

export default function ProductsPage() {
  const products = getAllProducts();

  return <ProductsBrowser products={products} />;
}

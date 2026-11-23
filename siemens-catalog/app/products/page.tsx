import Link from 'next/link';
import { getAllProducts } from '@/data';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'همه محصولات | فارمان گستر',
  description: 'لیست کامل تجهیزات اتوماسیون صنعتی و قطعات زیمنس',
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
          همه محصولات
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
          مجموعاً {products.length} محصول ثبت شده در کاتالوگ
        </p>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

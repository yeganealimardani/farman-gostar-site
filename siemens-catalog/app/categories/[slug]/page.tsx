import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { getProductsByCategory } from '@/data';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <div className="container" style={{ padding: '2rem 1rem 3rem' }}>
      <nav
        style={{
          fontSize: '0.85rem',
          color: 'var(--muted)',
          marginBottom: '1.5rem',
        }}
      >
        <Link href="/">خانه</Link>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <Link href="/products">محصولات</Link>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span>{category.name}</span>
      </nav>

      <header style={{ marginBottom: '2rem' }}>
        <div
          className="ltr"
          style={{ color: 'var(--brand)', fontSize: '0.9rem' }}
        >
          {category.nameEn}
        </div>
        <h1 style={{ fontSize: '1.8rem', margin: '0.4rem 0' }}>
          {category.name}
        </h1>
        <p style={{ color: 'var(--muted)', margin: 0 }}>
          {category.description}
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          {products.length.toLocaleString('fa-IR')} محصول
        </p>
      </header>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: '1.5rem' }}>
          هنوز محصولی در این دسته ثبت نشده است.
        </div>
      )}
    </div>
  );
}

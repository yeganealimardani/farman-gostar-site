import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { getFeatured } from '@/data';

export default function HomePage() {
  const orderedCategories = [...categories].sort(
    (a, b) => a.order - b.order
  );
  const featuredProducts = getFeatured().slice(0, 6);

  return (
    <main className="container" style={{ padding: '2rem 1rem' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ marginBottom: '0.75rem' }}>
          کاتالوگ تجهیزات صنعتی
        </h1>
        <p>
          برای مشاهدهٔ محصولات، دسته‌بندی موردنظر خود را انتخاب کنید.
        </p>
      </header>

      <section aria-labelledby="categories-heading">
        <h2 id="categories-heading" style={{ marginBottom: '1.5rem' }}>
          دسته‌بندی محصولات
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {orderedCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="card"
              style={{
                display: 'block',
                padding: '1.5rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <h3 style={{ marginBottom: '0.75rem' }}>
                {category.name}
              </h3>
              <p style={{ margin: 0 }}>{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section
          aria-labelledby="featured-heading"
          style={{ marginTop: '3rem' }}
        >
          <h2 id="featured-heading" style={{ marginBottom: '1.5rem' }}>
            محصولات منتخب
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

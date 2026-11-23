import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { getAllSlugs, getProductBySlug, getRelated } from '@/data';


export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}


export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);


  if (!product) notFound();


  const category = categories.find((item) => item.slug === product.category);
  const related = getRelated(product.slug);


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
        {category && (
          <>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </>
        )}
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span>{product.name}</span>
      </nav>


      <div className="product-detail">
        <div className="product-detail-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/products/${product.slug}.webp`}
            alt={product.name}
          />
        </div>


        <div>
          <div
            className="ltr"
            style={{ color: 'var(--brand)', fontSize: '0.9rem' }}
          >
            {product.brand}
          </div>


          <h1 style={{ fontSize: '1.6rem', margin: '0.4rem 0' }}>
            {product.name}
          </h1>


          <div
            className="ltr"
            style={{ color: 'var(--muted)', fontSize: '0.9rem' }}
          >
            {product.nameEn}
          </div>


          <p style={{ color: 'var(--muted)', lineHeight: 2 }}>
            {product.shortDesc}
          </p>


          <div className="product-meta">
            <div>
              <span className="product-meta-label">مدل</span>
              <span className="ltr">{product.model}</span>
            </div>
            <div>
              <span className="product-meta-label">کد کالا</span>
              <span className="ltr">{product.id}</span>
            </div>
            {category && (
              <div>
                <span className="product-meta-label">دسته</span>
                <span>{category.name}</span>
              </div>
            )}
          </div>


          <div className="product-buy">
            <div>
              {product.price === null ? (
                <strong>قیمت: استعلامی</strong>
              ) : (
                <strong>
                  {product.price.toLocaleString('fa-IR')} تومان
                </strong>
              )}
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href={`/contact?product=${product.slug}`}
                className="btn"
              >
                استعلام قیمت
              </Link>

              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  دانلود دیتاشیت
                </a>
              )}
            </div>
          </div>

        </div>
      </div>


      {product.specs.length > 0 && (
        <section style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.2rem' }}>مشخصات فنی</h2>


          <table className="spec-table">
            <tbody>
              {product.specs.map((spec) => (
                <tr key={spec.key}>
                  <th>{spec.label}</th>
                  <td>
                    <span className="ltr">{spec.value}</span>
                    {spec.unit ? ` ${spec.unit}` : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}


      {related.length > 0 && (
        <section style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.2rem' }}>محصولات مرتبط</h2>


          <div className="product-grid">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}


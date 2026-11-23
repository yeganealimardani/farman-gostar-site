import { getAllProducts } from '@/data';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>همه محصولات</h1>
      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}

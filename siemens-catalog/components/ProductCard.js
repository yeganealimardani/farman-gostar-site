import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="card product-card">
      <div className="product-card-brand">{product.brand}</div>
      <h3 className="product-card-title">{product.name}</h3>
      <div className="product-card-model ltr">{product.model}</div>
    </Link>
  );
}

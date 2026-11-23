'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import type { Product } from '@/data/types';

function normalizeText(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize('NFKC')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[۰-۹]/g, (digit) =>
      String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))
    )
    .replace(/[٠-٩]/g, (digit) =>
      String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit))
    )
    .trim();
}

export default function ProductsBrowser({
  products,
}: {
  products: Product[];
}) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const orderedCategories = [...categories].sort(
    (a, b) => a.order - b.order
  );

  const normalizedSearch = normalizeText(search);

  const filteredProducts = products.filter((product) => {
    const searchableText = normalizeText(
      [
        product.name,
        product.nameEn,
        product.model,
        product.brand,
        product.shortDesc,
        ...product.tags,
      ].join(' ')
    );

    const matchesSearch = searchableText.includes(normalizedSearch);
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
          همه محصولات
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
          نمایش {filteredProducts.length} محصول از مجموع {products.length} محصول
        </p>
      </header>

      <section
        aria-label="جستجو و فیلتر محصولات"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div>
          <label
            htmlFor="product-search"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            جستجو بر اساس نام، برند یا کد فنی
          </label>
          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="مثلاً 6ES7214 یا CPU 1214C"
            style={{
              width: '100%',
              padding: '0.8rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              font: 'inherit',
            }}
          />
        </div>

        <div>
          <label
            htmlFor="product-category"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            دسته‌بندی
          </label>
          <select
            id="product-category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            style={{
              width: '100%',
              padding: '0.8rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              background: '#fff',
              font: 'inherit',
            }}
          >
            <option value="all">همه دسته‌بندی‌ها</option>
            {orderedCategories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      {filteredProducts.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p
          role="status"
          style={{
            padding: '2rem',
            textAlign: 'center',
            color: 'var(--muted)',
          }}
        >
          محصولی با این عبارت و دسته‌بندی پیدا نشد. عبارت جستجو یا فیلتر را تغییر بده.
        </p>
      )}
    </div>
  );
}

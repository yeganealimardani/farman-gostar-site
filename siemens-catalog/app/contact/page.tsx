import { Suspense } from 'react';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';
import { getProductBySlug } from '@/data';

export const metadata: Metadata = {
  title: 'تماس با ما و استعلام قیمت | فارمان گستر',
  description:
    'ارتباط با واحد فروش و پشتیبانی فنی فارمان گستر جهت استعلام قیمت تجهیزات زیمنس',
};

async function ContactFormSection({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product: slug } = await searchParams;
  const product = slug ? getProductBySlug(slug) : undefined;

  return (
    <>
      {product && (
        <div
          style={{
            marginBottom: '1.5rem',
            padding: '1rem 1.25rem',
            borderRadius: '10px',
            border: '1px solid var(--brand)',
            background: 'rgba(0,0,0,0.02)',
            display: 'grid',
            gap: '0.35rem',
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
            استعلام برای این محصول:
          </span>
          <strong style={{ color: 'var(--text)' }}>{product.name}</strong>
          <span
            className="ltr"
            style={{ fontSize: '0.9rem', color: 'var(--muted)' }}
          >
            {product.brand} — {product.model}
          </span>
        </div>
      )}

      <ContactForm
        defaultProduct={product ? `${product.name} (${product.model})` : ''}
      />
    </>
  );
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
          تماس با ما و استعلام قیمت
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.7' }}>
          جهت دریافت پیش‌فاکتور، استعلام موجودی یا مشاوره فنی در خصوص تجهیزات
          اتوماسیون زیمنس، با کارشناسان ما در ارتباط باشید.
        </p>
      </header>

      <Suspense fallback={<ContactForm defaultProduct="" />}>
        <ContactFormSection searchParams={searchParams} />
      </Suspense>

      <div
        className="card"
        style={{
          marginTop: '2rem',
          padding: '2rem',
          display: 'grid',
          gap: '1.5rem',
          background: '#fff',
          borderRadius: '12px',
          border: '1px solid var(--border)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>
            شماره‌های تماس:
          </strong>
          <span className="ltr" style={{ fontSize: '1.05rem', color: 'var(--brand)' }}>
            ۰۲۱ - ۸۸۸۸۰۰۰۰ | ۰۹۱۲۰۰۰۰۰۰۰
          </span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>
            پست الکترونیک (ایمیل):
          </strong>
          <span className="ltr" style={{ fontSize: '1rem', color: 'var(--muted)' }}>
            info@farmangostar.com
          </span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>
            آدرس دفتر مرکزی:
          </strong>
          <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.6' }}>
            تهران، خیابان لاله زار جنوبی، پاساژ صنعت، طبقه دوم، پلاک ۲۵
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>
            ساعات پاسخگویی:
          </strong>
          <span style={{ color: 'var(--muted)' }}>
            شنبه تا چهارشنبه: ۹:۰۰ الی ۱۷:۰۰ | پنجشنبه‌ها: ۹:۰۰ الی ۱۳:۰۰
          </span>
        </div>
      </div>
    </div>
  );
}

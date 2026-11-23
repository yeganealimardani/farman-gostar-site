import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تماس با ما و استعلام قیمت | فارمان گستر',
  description: 'ارتباط با واحد فروش و پشتیبانی فنی فارمان گستر جهت استعلام قیمت تجهیزات زیمنس',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
          تماس با ما و استعلام قیمت
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.7' }}>
          جهت دریافت پیش‌فاکتور، استعلام موجودی یا مشاوره فنی در خصوص تجهیزات اتوماسیون زیمنس، با کارشناسان ما در ارتباط باشید.
        </p>
      </header>

      <div
        className="card"
        style={{
          padding: '2rem',
          display: 'grid',
          gap: '1.5rem',
          background: '#fff',
          borderRadius: '12px',
          border: '1px solid var(--border)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>شماره‌های تماس:</strong>
          <span className="ltr" style={{ fontSize: '1.05rem', color: 'var(--brand)' }}>
            ۰۲۱ - ۸۸۸۸۰۰۰۰ | ۰۹۱۲۰۰۰۰۰۰۰
          </span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>پست الکترونیک (ایمیل):</strong>
          <span className="ltr" style={{ fontSize: '1rem', color: 'var(--muted)' }}>
            info@farmangostar.com
          </span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>آدرس دفتر مرکزی:</strong>
          <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.6' }}>
            تهران، خیابان لاله زار جنوبی، پاساژ صنعت، طبقه دوم، پلاک ۲۵
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <strong style={{ fontSize: '1.1rem', color: 'var(--text)' }}>ساعات پاسخگویی:</strong>
          <span style={{ color: 'var(--muted)' }}>
            شنبه تا چهارشنبه: ۹:۰۰ الی ۱۷:۰۰ | پنجشنبه‌ها: ۹:۰۰ الی ۱۳:۰۰
          </span>
        </div>
      </div>
    </div>
  );
}

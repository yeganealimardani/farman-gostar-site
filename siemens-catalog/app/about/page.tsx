import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درباره ما | فارمان گستر',
  description: 'آشنایی با تاریخچه، فعالیت‌ها و حوزه خدمات شرکت فارمان گستر در زمینه اتوماسیون صنعتی',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '850px' }}>
      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>درباره فارمان گستر</h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
          تأمین‌کننده تخصصی تجهیزات اتوماسیون صنعتی و ابزار دقیق
        </p>
      </header>

      <div
        className="card"
        style={{
          padding: '2rem',
          background: '#fff',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          display: 'grid',
          gap: '2rem',
          lineHeight: '1.8',
          color: 'var(--text)',
        }}
      >
        <section>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--brand)' }}>
            معرفی شرکت
          </h2>
          <p style={{ margin: 0, color: 'var(--muted)' }}>
            فارمان گستر با سال‌ها تجربه در زمینه مشاوره، تأمین و پشتیبانی قطعات اتوماسیون صنعتی، به عنوان یکی از مراکز معتبر تأمین تجهیزات برندهای پیشرو مانند زیمنس (Siemens) در ایران فعالیت می‌کند. تمرکز ما ارائه محصولات اورجینال، تحویل سریع و همراهی فنی در پروژه‌های صنعتی است.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--brand)' }}>
            حوزه‌های فعالیت
          </h2>
          <ul style={{ paddingRight: '1.2rem', margin: 0, color: 'var(--muted)' }}>
            <li>تأمین انواع PLC و ماژول‌های ورودی/خروجی زیمنس (سری‌های S7-1200، S7-1500 و S7-300)</li>
            <li>نمایشگرهای لمسی صنعتی (HMI) و پنل‌های مانیتورینگ</li>
            <li>درایوها و اینورترهای کنترل دور موتور (Siemens SINAMICS)</li>
            <li>تجهیزات شبکه صنعتی (سوییچ‌ها، کانکتورهای Profinet و Profibus)</li>
            <li>منبع تغذیه‌های صنعتی (سری SITOP) و سنسورهای ابزار دقیق</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--brand)' }}>
            چرا فارمان گستر؟
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginTop: '0.5rem',
            }}
          >
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>ضمانت اصالت</strong>
              <small style={{ color: 'var(--muted)' }}>تضمین اصالت و سلامت تمامی تجهیزات صنعتی</small>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>پشتیبانی فنی</strong>
              <small style={{ color: 'var(--muted)' }}>مشاوره تخصصی قبل از خرید توسط مهندسین مجرب</small>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>تحویل سریع</strong>
              <small style={{ color: 'var(--muted)' }}>موجودی انبار و ارسال سریع به سراسر کشور</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

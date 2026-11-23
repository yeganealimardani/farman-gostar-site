import Link from 'next/link';

const columns = [
  {
    title: 'دسته‌بندی محصولات',
    links: [
      { href: '/categories/plc', label: 'کنترلر PLC' },
      { href: '/categories/hmi', label: 'پنل اپراتوری HMI' },
      { href: '/categories/drive-inverter', label: 'اینورتر و درایو' },
      { href: '/categories/industrial-network', label: 'شبکه صنعتی' },
      { href: '/categories/sensor', label: 'سنسور' },
      { href: '/categories/power-supply', label: 'منبع تغذیه' },
    ],
  },
  {
    title: 'دسترسی سریع',
    links: [
      { href: '/products', label: 'همه محصولات' },
      { href: '/about', label: 'درباره ما' },
      { href: '/contact', label: 'تماس با ما' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#101828',
        color: '#c9d1de',
        marginTop: '4rem',
        fontSize: '0.9rem',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          padding: '3rem 1rem 2rem',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1rem',
              color: '#fff',
              fontWeight: 700,
            }}
          >
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--brand)',
                display: 'grid',
                placeItems: 'center',
                fontSize: '0.9rem',
              }}
            >
              FG
            </span>
            فارمان گستر
          </div>
          <p style={{ margin: 0, lineHeight: 2, color: '#8f9aab' }}>
            تأمین‌کننده تجهیزات اتوماسیون صنعتی، کنترلرهای PLC، پنل‌های
            اپراتوری و درایوهای زیمنس و برندهای معتبر جهانی.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3
              style={{
                color: '#fff',
                fontSize: '0.95rem',
                marginTop: 0,
                marginBottom: '1rem',
              }}
            >
              {col.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {col.links.map((l) => (
                <li key={l.href} style={{ marginBottom: '0.6rem' }}>
                  <Link href={l.href} style={{ color: '#8f9aab' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              marginTop: 0,
              marginBottom: '1rem',
            }}
          >
            تماس
          </h3>
          <p style={{ margin: '0 0 0.6rem', color: '#8f9aab' }}>
            تهران، خیابان ولیعصر
          </p>
          <p style={{ margin: '0 0 0.6rem', color: '#8f9aab' }}>
            <span className="ltr">021-00000000</span>
          </p>
          <p style={{ margin: 0, color: '#8f9aab' }}>
            <span className="ltr">info@example.com</span>
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid #1f2937',
          padding: '1.2rem 1rem',
          textAlign: 'center',
          color: '#6b7688',
          fontSize: '0.82rem',
        }}
      >
        © ۱۴۰۵ فارمان گستر — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}

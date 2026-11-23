import Link from 'next/link';

const navItems = [
  { href: '/', label: 'خانه' },
  { href: '/products', label: 'محصولات' },
  { href: '/categories/plc', label: 'PLC' },
  { href: '/categories/hmi', label: 'HMI' },
  { href: '/categories/drive-inverter', label: 'اینورتر' },
  { href: '/categories/industrial-network', label: 'شبکه صنعتی' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس' },
];

export default function Header() {
  return (
    <header
      style={{
        background: '#fff',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          height: '68px',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontWeight: 700,
            fontSize: '1.05rem',
            color: 'var(--text)',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'var(--brand)',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              fontSize: '0.95rem',
            }}
          >
            FG
          </span>
          فارمان گستر
        </Link>

        <nav
          style={{
            display: 'flex',
            gap: '1.1rem',
            flexWrap: 'wrap',
            fontSize: '0.9rem',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginRight: 'auto' }}>
          <Link href="/contact" className="btn" style={{ fontSize: '0.85rem' }}>
            استعلام قیمت
          </Link>
        </div>
      </div>
    </header>
  );
}

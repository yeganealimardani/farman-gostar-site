import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          فارمان گستر
        </Link>

        <nav className="main-nav">
          <Link href="/">خانه</Link>
          <Link href="/products">محصولات</Link>
          <Link href="/categories">دسته‌بندی‌ها</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </nav>

        <a href="/contact" className="btn-quote">
          استعلام قیمت
        </a>
      </div>
    </header>
  );
}
